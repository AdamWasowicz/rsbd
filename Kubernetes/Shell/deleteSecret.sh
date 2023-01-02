#!/bin/bash
# Variables
PURPLE='\033[0;95m'
COLOR_OFF='\033[0m'
GREEN='\033[0;92m'
CYAN='\033[0;96m'
RED='\033[0;31m'

echo -e "${RED}[DELETE SECRET] - BEGIN${COLOR_OFF}"

kubectl apply -f ../Yml/rsbd-secret.yml

echo -e "${RED}[DELETE SECRET] - END${COLOR_OFF}"