#!/bin/bash
# Variables
PURPLE='\033[0;95m'
COLOR_OFF='\033[0m'
GREEN='\033[0;92m'
CYAN='\033[0;96m'  


echo -e "${PURPLE}[DELETE PREVIOUS MIGRATIONS CATALOG] - BEGIN${COLOR_OFF}"

# Remove current migrations
if [ -d "../RSBD_BE/Migrations" ]; then
  echo '[LOG] Migrations directory detected, begining deletion'
  rm -rf ../RSBD_BE/Migrations
  rm -rf ../RSBD_BE/RSBDBE
  echo '[LOG] Migrations directory deleted'
fi

echo -e "${PURPLE}[DELETE PREVIOUS MIGRATIONS CATALOG] - END${COLOR_OFF}"