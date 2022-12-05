#!/bin/bash
# Variables
PURPLE='\033[0;95m'
COLOR_OFF='\033[0m'
GREEN='\033[0;92m'
CYAN='\033[0;96m'  


echo -e "${CYAN}[APPLY MIGRATIONS] - BEGIN${COLOR_OFF}"

dotnet ef database update -c EU_DbContext -p ../RSBD_BE
dotnet ef database update -c EU_ReadOnlyDbContext -p ../RSBD_BE
dotnet ef database update -c US_DbContext -p ../RSBD_BE
dotnet ef database update -c US_ReadOnlyDbContext -p ../RSBD_BE
dotnet ef database update -c AS_DbContext -p ../RSBD_BE
dotnet ef database update -c AS_ReadOnlyDbContext -p ../RSBD_BE

echo -e "${CYAN}[APPLY MIGRATIONS] - END${COLOR_OFF}"