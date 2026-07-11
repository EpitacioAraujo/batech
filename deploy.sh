#!/bin/sh
set -e
cd "$(dirname "$0")"
git pull
docker compose --env-file ../.env up --build -d
docker image prune -f
