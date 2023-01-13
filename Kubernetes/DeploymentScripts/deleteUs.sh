#!/bin/bash
# Variables
COLOR_OFF='\033[0m'
RED='\033[0;31m'

echo -e "${RED}[DELETE US] - BEGIN${COLOR_OFF}"

kubectl delete -f ../Yml/us-read-deployment.yml
kubectl delete -f ../Yml/us-read-volume.yml

kubectl delete -f ../Yml/us-write-deployment.yml
kubectl delete -f ../Yml/us-write-volume.yml

echo -e "${RED}[DELETE US] - END${COLOR_OFF}"