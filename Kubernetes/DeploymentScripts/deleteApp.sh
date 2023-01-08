#!/bin/bash
# Variables
COLOR_OFF='\033[0m'
RED='\033[0;31m'

echo -e "${RED}[DELETE APP] - BEGIN${COLOR_OFF}"

kubectl delete -f ../Yml/app-deployment.yml
kubectl delete -f ../Yml/app-volume.yml

echo -e "${RED}[DELETE APP] - END${COLOR_OFF}"