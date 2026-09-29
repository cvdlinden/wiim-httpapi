#!/usr/bin/env python3
"""Validate openapi.yaml: parse + reject duplicate mapping keys.

PyYAML's safe_load silently accepts duplicate keys (last wins), but Redoc
and other strict tooling reject them. This loader raises on any duplicate.
"""
import sys
import yaml


class DupKeyLoader(yaml.SafeLoader):
    pass


def _no_duplicates(loader, node, deep=False):
    mapping = {}
    for key_node, value_node in node.value:
        key = loader.construct_object(key_node, deep=deep)
        if key in mapping:
            mark = key_node.start_mark
            raise ValueError(
                f"duplicate key {key!r} at line {mark.line + 1} "
                f"column {mark.column + 1}"
            )
        mapping[key] = loader.construct_object(value_node, deep=deep)
    return mapping


DupKeyLoader.add_constructor(
    yaml.resolver.BaseResolver.DEFAULT_MAPPING_TAG, _no_duplicates
)


def main():
    path = sys.argv[1] if len(sys.argv) > 1 else "openapi.yaml"
    with open(path) as f:
        doc = yaml.load(f, Loader=DupKeyLoader)
    n_paths = len(doc.get("paths", {}))
    n_schemas = len(doc.get("components", {}).get("schemas", {}))
    print(f"OK: {path} parses, no duplicate keys "
          f"({n_paths} paths, {n_schemas} schemas)")


if __name__ == "__main__":
    try:
        main()
    except (ValueError, yaml.YAMLError) as e:
        print(f"INVALID: {e}", file=sys.stderr)
        sys.exit(1)
