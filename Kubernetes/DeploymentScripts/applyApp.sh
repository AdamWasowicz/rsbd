#!/bin/bash
# Variables
COLOR_OFF='\033[0m'
GREEN='\033[0;92m'

echo -e "${GREEN}[APPLY APP] - BEGIN${COLOR_OFF}"

kubectl apply -f ../Yml/app-volume.yml
kubectl apply -f ../Yml/app-deployment.yml

echo -e "${GREEN}[APPLY APP] - END${COLOR_OFF}"