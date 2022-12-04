#!/bin/bash
# Variables
PURPLE='\033[0;95m'
COLOR_OFF='\033[0m'
GREEN='\033[0;92m'
CYAN='\033[0;96m'  

echo -e "${PURPLE}[SCRIPT] - BEGIN${COLOR_OFF}"

echo -e "${CYAN}[EU] - WRITE${COLOR_OFF}"
PGPASSWORD=AdamDev psql -h localhost -p 5602 -d RSBD_DB_M -U AdamDev -f ./Scripts/eu-write.sql

echo -e "${CYAN}[EU] - READ${COLOR_OFF}"
PGPASSWORD=AdamDev psql -h localhost -p 5601 -d RSBD_DB -U AdamDev -f ./Scripts/eu-read.sql


echo -e "${PURPLE}[SCRIPT] - END${COLOR_OFF}"
read -p "Press enter to continue..."