#!/bin/bash
# Variables
COLOR_OFF='\033[0m'
RED='\033[0;31m'

echo -e "${RED}[DELETE EU] - BEGIN${COLOR_OFF}"

kubectl delete -f ../Yml/eu-read-deployment.yml
kubectl delete -f ../Yml/eu-read-volume.yml

kubectl delete -f ../Yml/eu-write-deployment.yml
kubectl delete -f ../Yml/eu-write-volume.yml

echo -e "${RED}[DELETE EU] - END${COLOR_OFF}"