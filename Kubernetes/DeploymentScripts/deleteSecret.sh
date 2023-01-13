#!/bin/bash
# Variables
COLOR_OFF='\033[0m'
RED='\033[0;31m'

echo -e "${RED}[DELETE SECRET] - BEGIN${COLOR_OFF}"

kubectl delete -f ../Yml/rsbd-secret.yml

echo -e "${RED}[DELETE SECRET] - END${COLOR_OFF}"