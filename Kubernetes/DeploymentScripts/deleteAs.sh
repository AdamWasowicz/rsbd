#!/bin/bash
# Variables
COLOR_OFF='\033[0m'
RED='\033[0;31m'

echo -e "${RED}[DELETE AS] - BEGIN${COLOR_OFF}"

kubectl delete -f ../Yml/as-read-deployment.yml
kubectl delete -f ../Yml/as-read-volume.yml

kubectl delete -f ../Yml/as-write-deployment.yml
kubectl delete -f ../Yml/as-write-volume.yml

echo -e "${RED}[DELETE AS] - END${COLOR_OFF}"