#!/bin/bash
if [ $# -eq 0 ]
  then
    echo "No arguments supplied"
else
  tsc --target es6 $1/main.ts
  node $1/main.js
fi
