#!/bin/bashs
echo "[SLAVE ENTRYPOINT] - BEGIN"

#Check if master is online
until nc -z ${PG_REP_MASTER} 5432
do
    echo "[LOG] Waiting for master to appear online..."
    sleep 1s
done

echo "[LOG] Master is online"

# PostgreSQL
# Wait till postgreSQL is ready
until pg_isready
do
  echo "[LOG] Waiting for postgres"
  sleep 1;
done

# Delete previous subscription
psql -v ON_ERROR_STOP=1 --username "$PG_REP_USER" --dbname "$POSTGRES_DB" <<-EOSQL
drop subscription if exists logicalsub cascade;
EOSQL

# Create new subscription
psql -v ON_ERROR_STOP=1 --username "$PG_REP_USER" --dbname "$POSTGRES_DB" <<-EOSQL
create subscription logicalsub connection 'dbname=$POSTGRES_DB host=$PG_REP_MASTER user=$PG_REP_USER port=5432 password=$POSTGRES_PASSWORD' publication logicalpub;
EOSQL


echo "[SLAVE ENTRYPOINT] - END"