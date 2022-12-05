#!/bin/bash
# Variables
COLOR_OFF='\033[0m'
YELLOW='\033[0;93m'
RED='\033[0;91m' 

echo -e "${YELLOW}[SCRIPT] - BEGIN${COLOR_OFF}"

# EU
# EU - WRITE
echo -e "${RED}[EU] - WRITE${COLOR_OFF}"
PGPASSWORD=AdamDev psql -h localhost -p 5602 -d RSBD_DB_M -U AdamDev -f ./sql/eu-write.sql

# EU - READ
echo -e "${RED}[EU] - READ${COLOR_OFF}"
PGPASSWORD=AdamDev psql -h localhost -p 5601 -d RSBD_DB -U AdamDev -f ./sql/eu-read.sql

# US
# US - WRITE
echo -e "${RED}[US] - WRITE${COLOR_OFF}"
PGPASSWORD=AdamDev psql -h localhost -p 5604 -d RSBD_DB_M -U AdamDev -f ./sql/us-write.sql

# US - READ
echo -e "${RED}[US] - READ${COLOR_OFF}"
PGPASSWORD=AdamDev psql -h localhost -p 5603 -d RSBD_DB -U AdamDev -f ./sql/us-read.sql

# AS
# AS - WRITE
echo -e "${RED}[AS] - WRITE${COLOR_OFF}"
PGPASSWORD=AdamDev psql -h localhost -p 5606 -d RSBD_DB_M -U AdamDev -f ./sql/as-write.sql

# AS - READ
echo -e "${RED}[AS] - READ${COLOR_OFF}"
PGPASSWORD=AdamDev psql -h localhost -p 5605 -d RSBD_DB -U AdamDev -f ./sql/as-read.sql


echo -e "${YELLOW}[SCRIPT] - END${COLOR_OFF}"