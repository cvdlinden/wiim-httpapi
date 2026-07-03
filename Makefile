# WiiM HTTP API docs — build helpers.
#
#   make check   validate openapi.yaml (parse + duplicate-key detection)
#   make html    render a readable single-file HTML (Redoc)
#   make pdf      render HTML + PDF (Redoc + headless Chrome)
#   make json     regenerate openapi.json from openapi.yaml
#   make clean    remove build/ output
#
# Rendering needs npx (bundled with npm); the PDF step additionally needs a
# Chromium/Chrome binary. Each target checks for what it needs and prints a
# clear message if a tool is missing.

SPEC := openapi.yaml

.PHONY: check html pdf json clean help

help:
	@echo "targets: check | html | pdf | json | clean"

# --- validation --------------------------------------------------------
# Prefer python3; fall back to python. validate-spec.py rejects duplicate
# mapping keys (which PyYAML otherwise silently accepts but Redoc rejects).
check:
	@PY=$$(command -v python3 || command -v python); \
	if [ -z "$$PY" ]; then \
		echo "ERROR: python3 not found (needed for 'make check')." >&2; exit 1; \
	fi; \
	"$$PY" scripts/validate-spec.py $(SPEC)

# --- rendering ---------------------------------------------------------
# HTML/PDF both validate first, then shell out to the render script.
html: check
	@command -v npx >/dev/null 2>&1 || { \
		echo "ERROR: npx not found (install Node.js/npm) for 'make html'." >&2; exit 1; }
	@./scripts/render-docs.sh --html

pdf: check
	@command -v npx >/dev/null 2>&1 || { \
		echo "ERROR: npx not found (install Node.js/npm) for 'make pdf'." >&2; exit 1; }
	@if ! command -v google-chrome-stable >/dev/null 2>&1 \
	    && ! command -v google-chrome >/dev/null 2>&1 \
	    && ! command -v chromium >/dev/null 2>&1 \
	    && ! command -v chromium-browser >/dev/null 2>&1; then \
		echo "WARNING: no Chrome/Chromium found; only HTML will be produced." >&2; \
	fi
	@./scripts/render-docs.sh

# --- generated json ----------------------------------------------------
json:
	@command -v npx >/dev/null 2>&1 || { \
		echo "ERROR: npx not found (install Node.js/npm) for 'make json'." >&2; exit 1; }
	@npx --yes js-yaml $(SPEC) > openapi.json && echo ">> wrote openapi.json"

clean:
	@rm -rf build && echo ">> removed build/"
