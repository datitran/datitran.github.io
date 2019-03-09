#!/usr/bin/env bash
yarn install
yarn run build
cp README.md build/README.md