#!/bin/sh

printf "%s" $@ | node -p "$*" || true