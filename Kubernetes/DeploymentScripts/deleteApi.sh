#!/bin/bash
# Variables
COLOR_OFF='\033[0m'
RED='\033[0;31m'

echo -e "${RED}[DELETE API] - BEGIN${COLOR_OFF}"

kubectl delete -f ../Yml/api-deployment.yml

echo -e "${RED}[DELETE API] - END${COLOR_OFF}"