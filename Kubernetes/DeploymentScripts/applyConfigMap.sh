#!/bin/bash
# Variables
COLOR_OFF='\033[0m'
GREEN='\033[0;92m'

echo -e "${GREEN}[APPLY CONFIG MAP] - BEGIN${COLOR_OFF}"

kubectl apply -f ../Yml/rsbd-configmap.yml

echo -e "${GREEN}[APPLY CONFIG MAP] - END${COLOR_OFF}"