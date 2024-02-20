#!/bin/sh
BUILD_DIR=build/docs

[ -e phpDocumentor.phar ] || wget https://phpdoc.org/phpDocumentor.phar

mkdir -p "$BUILD_DIR"

php phpDocumentor.phar \
    -t "$BUILD_DIR" \
    -d "lib/Api" \
    -d "lib/Exceptions" \
    -d "lib/Model" \
    -d "lib/Service" \
    -d "lib/Tools" \
    -d "lib/*.php" \
    --title="Nextcloud Circles API"

touch "$BUILD_DIR/.nojekyll"
