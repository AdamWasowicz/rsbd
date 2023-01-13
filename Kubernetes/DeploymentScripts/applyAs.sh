#!/bin/bash
# Variables
COLOR_OFF='\033[0m'
GREEN='\033[0;92m'

echo -e "${GREEN}[APPLY AS] - BEGIN${COLOR_OFF}"

kubectl apply -f ../Yml/as-read-volume.yml
kubectl apply -f ../Yml/as-read-deployment.yml

kubectl apply -f ../Yml/as-write-volume.yml
kubectl apply -f ../Yml/as-write-deployment.yml

echo -e "${GREEN}[APPLY AS] - END${COLOR_OFF}"