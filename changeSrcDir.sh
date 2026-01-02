#!/bin/bash
BEFORE="./"
AFTER="./principles/principleName/" 

SRC='src/'
BEFORE="${BEFORE}${SRC}"
AFTER="${AFTER}${SRC}"

sed -i "s|$BEFORE|$AFTER|g" webpack.common.js webpack.dev.js webpack.prod.js 
echo "$BEFORE"
echo "$AFTER"