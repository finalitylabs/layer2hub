#!/bin/bash

TAG=$1

if [ "$#" -ne 1 ]
then
  TAG='latest'
fi

docker push us.gcr.io/alexvlewis-dev/layer2hub:$TAG
