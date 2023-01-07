#!/bin/bash
# Variables
COLOR_OFF='\033[0m'
RED='\033[0;31m'

echo -e "${RED}[FULL DELETE] - BEGIN${COLOR_OFF}"

source './deleteSecret.sh';
source './deleteConfigMap.sh'

source './deleteApi.sh'

source './deleteEu.sh';
source './deleteUs.sh';
source './deleteAs.sh';

echo -e "${RED}[FULL DELETE] - END${COLOR_OFF}"
read -p "Press enter to continue..."