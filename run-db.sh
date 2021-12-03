#!/usr/bin/env bash

# Error as soon as a command returns a non-zero code
set -e

# Get the current git commit for tagging purposes
GIT_COMMIT=$(git rev-parse HEAD)

function find_container {
    docker ps --quiet --all --filter name="$1"
}

function dev_db {
  DB_CONTAINER=$(find_container express-boilerplate-postgres-db)
    if [[ $DB_CONTAINER == "" ]]; then
        docker create \
            --name express-boilerplate-postgres-db \
            --env POSTGRES_DB=express_boilerplate \
            --env POSTGRES_USER=dev \
            --env POSTGRES_PASSWORD=dev \
            --publish 5432:5432 \
            postgres:14
    fi

    docker start express-boilerplate-postgres-db
}

function connect_dev_db {
  DB_CONTAINER=$(find_container express-boilerplate-postgres-db)
  if [[ $DB_CONTAINER != "" ]]; then
    docker exec -ti $DB_CONTAINER psql -U dev -d express_boilerplate
  fi
}

case ${@:$OPTIND:1} in
  "start")
    dev_db
    ;;
  "connect")
    connect_dev_db
    ;;
  *)
    echo "Invalid command"
    ;;
esac
