#!/bin/bash
# Variables
COLOR_OFF='\033[0m'
GREEN='\033[0;92m'

echo -e "${GREEN}[APPLY US] - BEGIN${COLOR_OFF}"

kubectl apply -f ../Yml/us-read-volume.yml
kubectl apply -f ../Yml/us-read-deployment.yml

kubectl apply -f ../Yml/us-write-volume.yml
kubectl apply -f ../Yml/us-write-deployment.yml

echo -e "${GREEN}[APPLY US] - END${COLOR_OFF}"