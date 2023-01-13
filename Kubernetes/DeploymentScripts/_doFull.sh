#!/bin/bash
# Variables
COLOR_OFF='\033[0m';
PURPLE='\033[0;95m'; 

echo -e "${PURPLE}[FULL SETUP] - BEGIN${COLOR_OFF}";

source './applySecret.sh';
source './applyConfigMap.sh';

source './applyEu.sh';
source './applyUs.sh';
source './applyAs.sh';

source './applyApi.sh';
source './applyApp.sh';

echo -e "${PURPLE}[FULL SETUP] - END${COLOR_OFF}";
read -p "Press enter to continue...";