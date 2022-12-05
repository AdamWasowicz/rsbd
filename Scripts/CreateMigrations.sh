#!/bin/bash
# Variables
PURPLE='\033[0;95m'
COLOR_OFF='\033[0m'
GREEN='\033[0;92m'
CYAN='\033[0;96m'  


echo -e "${GREEN}[CREATE MIGRATIONS] - BEGIN${COLOR_OFF}"

# Create unique migration name
now=$(date)
stamp=${now//[ ,.:]/_}

dotnet ef migrations add $stamp -c EU_DbContext -o Migrations/EU_Write -p ../RSBD_BE
dotnet ef migrations add $stamp -c EU_ReadOnlyDbContext -o Migrations/EU_Read -p ../RSBD_BE
dotnet ef migrations add $stamp -c US_DbContext -o Migrations/US_Write -p ../RSBD_BE
dotnet ef migrations add $stamp -c US_ReadOnlyDbContext -o Migrations/US_Read -p ../RSBD_BE
dotnet ef migrations add $stamp -c AS_DbContext -o Migrations/AS_Write -p ../RSBD_BE
dotnet ef migrations add $stamp -c AS_ReadOnlyDbContext -o Migrations/AS_Read -p ../RSBD_BE

echo -e "${GREEN}[CREATE MIGRATIONS] - END${COLOR_OFF}"