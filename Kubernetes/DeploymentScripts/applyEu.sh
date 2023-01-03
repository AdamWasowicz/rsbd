#!/bin/bash
# Variables
COLOR_OFF='\033[0m'
GREEN='\033[0;92m'

echo -e "${GREEN}[APPLY EU] - BEGIN${COLOR_OFF}"

kubectl apply -f ../Yml/eu-read-volume.yml
kubectl apply -f ../Yml/eu-read-deployment.yml

kubectl apply -f ../Yml/eu-write-volume.yml
kubectl apply -f ../Yml/eu-write-deployment.yml

echo -e "${GREEN}[APPLY EU] - END${COLOR_OFF}"