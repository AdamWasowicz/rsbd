#!/bin/bash
# Variables
PURPLE='\033[0;95m'
COLOR_OFF='\033[0m'
GREEN='\033[0;92m'
CYAN='\033[0;96m'  

echo -e "${GREEN}[DELETE EU] - BEGIN${COLOR_OFF}"

kubectl delete -f ../Yml/eu-read-deployment.yml
kubectl delete -f ../Yml/eu-read-volume.yml

echo -e "${GREEN}[DELETE EU] - END${COLOR_OFF}"