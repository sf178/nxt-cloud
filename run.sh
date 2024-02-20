#!/bin/bash

docker-compose down
echo "Building and starting containers..."
docker-compose up -d --build

echo "Containers are up and running."
docker-compose ps