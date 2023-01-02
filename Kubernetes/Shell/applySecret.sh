#!/bin/bash
# Variables
PURPLE='\033[0;95m'
COLOR_OFF='\033[0m'
GREEN='\033[0;92m'
CYAN='\033[0;96m' 

echo -e "${GREEN}[APPLY SECRET] - BEGIN${COLOR_OFF}"

kubectl apply -f ../Yml/rsbd-secret.yml

echo -e "${GREEN}[APPLY SECRET] - END${COLOR_OFF}"