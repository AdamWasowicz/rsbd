#!/bin/bash
# Variables
COLOR_OFF='\033[0m'
GREEN='\033[0;92m'

echo -e "${GREEN}[APPLY API] - BEGIN${COLOR_OFF}"

kubectl apply -f ../Yml/api-deployment.yml

echo -e "${GREEN}[APPLY API] - END${COLOR_OFF}"