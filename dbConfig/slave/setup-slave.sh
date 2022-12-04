#!/bin/bash
echo "[CONFIG SLAVE] Slave setup"

# # Wait for master
# until nc -z ${PG_REP_MASTER} 5432
# do
#     echo "[LOG] Waiting for master to appear online..."
#     sleep 1s
# done
# echo "[LOG] Master detected"

# postgresql.conf
cat >> ${PGDATA}/postgresql.conf <<EOF
wal_level = logical
hot_standby = on
EOF

# # Restart postgre]
# pg_ctl restart

# until pg_isready
# do
#   echo "[LOG] Waiting for postgres"
#   sleep 1;
# done

# # Create new subscription
# psql -v ON_ERROR_STOP=1 --username "$PG_REP_USER" --dbname "$POSTGRES_DB" <<-EOSQL
# create subscription logicalsub connection 'dbname=$PG_REP_DB_NAME host=$PG_REP_MASTER user=$PG_REP_USER port=5432 password=$POSTGRES_PASSWORD' publication logicalpub;
# EOSQL

echo "[CONFIG SLAVE] Slave setup end"