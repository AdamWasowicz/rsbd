#!/bin/bash
# Variables
COLOR_OFF='\033[0m'
BLUE='\033[0;94m'


echo -e "${BLUE}[SCRIPT | FULL] - BEGIN${COLOR_OFF}"

# Delete previous migrations
source ./DeletePreviousMigrations.sh

# Create migrations
source ./CreateMigrations.sh

# Apply migrations
source ./ApplyMigrations.sh

# Create Publishers and Subscriptions
source ./ApplySubscriptions.sh

echo -e "${BLUE}[SCRIPT | FULL] - END${COLOR_OFF}"
read -p "Press enter to continue..."