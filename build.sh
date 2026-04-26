#!/bin/bash
npm install
NODE_OPTIONS=--openssl-legacy-provider npm run build
cp README.md LICENSE build/
