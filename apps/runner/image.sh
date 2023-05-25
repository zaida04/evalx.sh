#!/bin/bash

if [ $# -ne 1 ]; then
  echo "Usage: $0 LANG"
  exit 1
fi

LANG="$1"
DIR="docker/$LANG"

if [ ! -d "$DIR" ]; then
  echo "Directory $DIR does not exist."
  exit 1
fi

docker build -t "evalx-$LANG-runner" "$DIR"
