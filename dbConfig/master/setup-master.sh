#!/bin/bash
echo "[CONFIG Master] Master setup"

# Edit postgresql.conf
cat >> ${PGDATA}/postgresql.conf <<EOF
wal_level = logical
hot_standby = on
EOF

# Restart postgre]
# pg_ctl restart

# until pg_isready
# do
#   echo "[LOG] Waiting for postgres"
#   sleep 1;
# done

# psql -v ON_ERROR_STOP=1 --username "$PG_REP_USER" --dbname "$POSTGRES_DB" <<-EOSQL
# create publication logicalpub for all tables;
# EOSQL

echo "[CONFIG Master] Master setup end"