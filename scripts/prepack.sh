#!/usr/bin/env bash

set -x
set -e
set -o pipefail

if [[ -z $SKIP_PREPACK ]]; then
  yarn build
  exit 0
fi

echo "Notice: skipping prepack."
