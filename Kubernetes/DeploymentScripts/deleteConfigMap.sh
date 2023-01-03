#!/bin/bash
# Variables
COLOR_OFF='\033[0m'
RED='\033[0;31m'

echo -e "${RED}[DELETE CONFIG MAP] - BEGIN${COLOR_OFF}"

kubectl delete -f ../Yml/rsbd-configmap.yml

echo -e "${RED}[DELETE CONFIG MAP] - END${COLOR_OFF}"