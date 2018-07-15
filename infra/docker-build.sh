#!/bin/bash

TAG=$1
DIR=$(dirname "$0")

if [ "$#" -ne 1 ]
then
  TAG='latest'
fi

docker build -t us.gcr.io/alexvlewis-dev/layer2hub:$TAG $DIR/../
