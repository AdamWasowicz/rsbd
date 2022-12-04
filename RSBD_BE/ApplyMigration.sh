#!/bin/bash
# Variables
PURPLE='\033[0;95m'
COLOR_OFF='\033[0m'
GREEN='\033[0;92m'
CYAN='\033[0;96m'  


echo -e "${PURPLE}[SCRIPT] - BEGIN${COLOR_OFF}"

# Remove current migrations
if [ -d "./Migrations" ]; then
  echo '[LOG] Migrations directory detected, begining deletion'
  rm -rf ./Migrations
  echo '[LOG] Migrations directory deleted'
fi
 
# Create migrations
echo -e "${GREEN}[CREATE MIGRATIONS] - BEGIN${COLOR_OFF}"

# Create unique migration name
now=$(date)
stamp=${now//[ ,.:]/_}

dotnet ef migrations add $stamp -c EU_DbContext -o Migrations/EU_Write
dotnet ef migrations add $stamp -c EU_ReadOnlyDbContext -o Migrations/EU_Read
# dotnet ef migrations add $stamp -c US_DbContext -o Migrations/US_Write
# dotnet ef migrations add $stamp -c US_ReadOnlyDbContext -o Migrations/US_Read
# dotnet ef migrations add $stamp -c AS_DbContext -o Migrations/AS_Write
# dotnet ef migrations add $stamp -c AS_ReadOnlyDbContext -o Migrations/AS_Read

echo -e "${GREEN}[CREATE MIGRATIONS] - END${COLOR_OFF}"


#Apply migrations
echo -e "${CYAN}[APPLY MIGRATIONS] - BEGIN${COLOR_OFF}"

dotnet ef database update -c EU_DbContext
dotnet ef database update -c EU_ReadOnlyDbContext
# dotnet ef database update -c US_DbContext
# dotnet ef database update -c US_ReadOnlyDbContext
# dotnet ef database update -c AS_DbContext
# dotnet ef database update -c AS_ReadOnlyDbContext

echo -e "${CYAN}[APPLY MIGRATIONS] - END${COLOR_OFF}"

echo -e "${PURPLE}[SCRIPT] - END${COLOR_OFF}"