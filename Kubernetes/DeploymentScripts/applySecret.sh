#!/bin/bash
# Variables
COLOR_OFF='\033[0m'
GREEN='\033[0;92m'

echo -e "${GREEN}[APPLY SECRET] - BEGIN${COLOR_OFF}"

kubectl apply -f ../Yml/rsbd-secret.yml

echo -e "${GREEN}[APPLY SECRET] - END${COLOR_OFF}"