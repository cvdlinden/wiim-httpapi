#!/usr/bin/env bash
#
# Render openapi.yaml into a readable single-file HTML and a PDF.
#
#   ./scripts/render-docs.sh            # -> build/wiim-api.html and build/wiim-api.pdf
#   ./scripts/render-docs.sh --html     # HTML only (skip PDF)
#
# HTML is produced with Redocly (Redoc) which gives a dense, navigable
# reference-manual layout that reads far better than the Swagger UI.
# The PDF is produced by printing that HTML with headless Chrome.
#
# Requirements:
#   - npx (bundled with npm) — fetches @redocly/cli on first run
#   - a Chromium/Chrome binary for the PDF step (skippable with --html)
#
set -euo pipefail

cd "$(dirname "$0")/.."

SPEC="openapi.yaml"
OUT_DIR="build"
HTML="$OUT_DIR/wiim-api.html"
PDF="$OUT_DIR/wiim-api.pdf"
HTML_ONLY=0
[ "${1:-}" = "--html" ] && HTML_ONLY=1

mkdir -p "$OUT_DIR"

echo ">> Building HTML with Redocly ($SPEC -> $HTML)"
# --yes so CI/non-interactive runs don't prompt to install; version pinned-ish
# to the 2.x line. Node < 20 prints an EBADENGINE warning but still works.
npx --yes @redocly/cli@2 build-docs "$SPEC" -o "$HTML"

if [ "$HTML_ONLY" -eq 1 ]; then
  echo ">> HTML only requested; done: $HTML"
  exit 0
fi

# Find a Chrome/Chromium binary for the PDF step.
CHROME=""
for c in google-chrome-stable google-chrome chromium chromium-browser; do
  if command -v "$c" >/dev/null 2>&1; then CHROME="$c"; break; fi
done

if [ -z "$CHROME" ]; then
  echo ">> No Chrome/Chromium found; skipping PDF. HTML is at: $HTML" >&2
  exit 0
fi

echo ">> Printing PDF with $CHROME ($HTML -> $PDF)"
"$CHROME" --headless --no-sandbox --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$PDF" "file://$(pwd)/$HTML" 2>/dev/null

echo ">> Done:"
echo "   HTML: $HTML"
echo "   PDF:  $PDF"
