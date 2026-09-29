#!/usr/bin/env bash
#
# Render openapi.yaml into a readable single-file HTML and a PDF.
#
#   ./scripts/render-docs.sh                    # -> build/wiim-api.html and build/wiim-api.pdf
#   ./scripts/render-docs.sh --html              # HTML only (skip PDF)
#   ./scripts/render-docs.sh --engine=firefox    # force Firefox for the PDF step
#   ./scripts/render-docs.sh --engine=chrome     # force Chrome/Chromium
#
# HTML is produced with Redocly (Redoc) which gives a dense, navigable
# reference-manual layout that reads far better than the Swagger UI.
# The PDF is produced by printing that HTML with a headless browser: Chrome
# or Firefox, whichever is present (Chrome preferred if both are, override
# with --engine).
#
# Requirements:
#   - npx (bundled with npm) — fetches @redocly/cli on first run
#   - a Chromium/Chrome or Firefox binary for the PDF step (skippable with --html)
#
set -euo pipefail

cd "$(dirname "$0")/.."

SPEC="openapi.yaml"
OUT_DIR="build"
HTML="$OUT_DIR/wiim-api.html"
PDF="$OUT_DIR/wiim-api.pdf"
HTML_ONLY=0
ENGINE="auto"

for arg in "$@"; do
  case "$arg" in
    --html) HTML_ONLY=1 ;;
    --engine=*) ENGINE="${arg#--engine=}" ;;
    *)
      echo "Unknown argument: $arg" >&2
      exit 1
      ;;
  esac
done

case "$ENGINE" in
  auto|chrome|firefox) ;;
  *)
    echo "Unknown --engine value: $ENGINE (expected auto|chrome|firefox)" >&2
    exit 1
    ;;
esac

mkdir -p "$OUT_DIR"

echo ">> Building HTML with Redocly ($SPEC -> $HTML)"
# --yes so CI/non-interactive runs don't prompt to install. Pinned to 2.36.0,
# the last line verified to run on Node 18 (newer 2.37+ still WORK on Node 18
# but print a louder EBADENGINE warning). Override with REDOCLY_VERSION on a
# machine with Node >= 20.19. The EBADENGINE warning is non-fatal.
#
# --theme.openapi.expandResponses=all is NOT cosmetic — without it, Redoc
# renders every response body's schema behind an inactive "Schema" tab
# (defaulting to "Example Value" instead) that only populates on a live
# click. A static export (this HTML file, and doubly so the PDF printed
# from it) never fires that click, so EVERY per-field description this
# project's enrichment work adds — mode-value tables, curpos's ms-vs-µs
# heuristic, hex/HTML decode notes, all of it — silently vanishes from
# both outputs even though it's sitting right there in openapi.yaml.
# Confirmed by extracting PDF text before/after: 0 matches for schema-only
# content (e.g. "36000000", part of curpos's own description) without this
# flag, dozens with it. Path-level `description:` prose (not inside a
# schema) was never affected — only content living under
# `properties.*.description` was.
REDOCLY_VERSION="${REDOCLY_VERSION:-2.36.0}"
npx --yes "@redocly/cli@${REDOCLY_VERSION}" build-docs "$SPEC" -o "$HTML" \
  --theme.openapi.expandResponses=all

if [ "$HTML_ONLY" -eq 1 ]; then
  echo ">> HTML only requested; done: $HTML"
  exit 0
fi

# Find a Chrome/Chromium binary.
CHROME=""
for c in google-chrome-stable google-chrome chromium chromium-browser; do
  if command -v "$c" >/dev/null 2>&1; then CHROME="$c"; break; fi
done

# Find a Firefox binary.
FIREFOX=""
for f in firefox firefox-esr; do
  if command -v "$f" >/dev/null 2>&1; then FIREFOX="$f"; break; fi
done

case "$ENGINE" in
  chrome)
    if [ -z "$CHROME" ]; then
      echo ">> --engine=chrome requested but no Chrome/Chromium found; skipping PDF. HTML is at: $HTML" >&2
      exit 0
    fi
    FIREFOX=""
    ;;
  firefox)
    if [ -z "$FIREFOX" ]; then
      echo ">> --engine=firefox requested but no Firefox found; skipping PDF. HTML is at: $HTML" >&2
      exit 0
    fi
    CHROME=""
    ;;
  auto)
    if [ -z "$CHROME" ] && [ -z "$FIREFOX" ]; then
      echo ">> No Chrome/Chromium or Firefox found; skipping PDF. HTML is at: $HTML" >&2
      exit 0
    fi
    ;;
esac

# PDF_TIMEOUT bounds the print step so a wedged browser (seen in some
# sandboxed/headless environments — see Firefox note below) fails fast
# instead of hanging the whole build. Override with PDF_TIMEOUT=0 to disable.
PDF_TIMEOUT="${PDF_TIMEOUT:-120}"
TIMEOUT_CMD=()
if [ "$PDF_TIMEOUT" != "0" ] && command -v timeout >/dev/null 2>&1; then
  TIMEOUT_CMD=(timeout "$PDF_TIMEOUT")
fi

PDF_RC=0
if [ -n "$CHROME" ]; then
  echo ">> Printing PDF with $CHROME ($HTML -> $PDF)"
  "${TIMEOUT_CMD[@]}" "$CHROME" --headless --no-sandbox --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="$PDF" "file://$(pwd)/$HTML" 2>/dev/null || PDF_RC=$?
else
  # Firefox's --print-to-pdf refuses to run against a profile that's already
  # locked by a running interactive instance, so it needs its own throwaway
  # profile (-no-remote + a fresh temp dir) rather than the user's default one.
  FF_PROFILE="$(mktemp -d)"
  trap 'rm -rf "$FF_PROFILE"' EXIT
  echo ">> Printing PDF with $FIREFOX ($HTML -> $PDF)"
  "${TIMEOUT_CMD[@]}" "$FIREFOX" --headless --no-remote --profile "$FF_PROFILE" \
    --print-to-pdf="$PDF" "file://$(pwd)/$HTML" 2>/dev/null || PDF_RC=$?
fi

if [ "$PDF_RC" -eq 124 ]; then
  echo ">> PDF step timed out after ${PDF_TIMEOUT}s (PDF_TIMEOUT=0 to disable, or try --engine=chrome/firefox" >&2
  echo "   to switch browsers). HTML is still available at: $HTML" >&2
  exit 1
elif [ "$PDF_RC" -ne 0 ] || [ ! -s "$PDF" ]; then
  echo ">> PDF step produced no output (engine exited $PDF_RC). HTML is still available at: $HTML" >&2
  exit 1
fi

echo ">> Done:"
echo "   HTML: $HTML"
echo "   PDF:  $PDF"
