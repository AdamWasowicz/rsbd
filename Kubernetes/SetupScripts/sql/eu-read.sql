drop subscription if exists logicalsub cascade;
create subscription logicalsub connection 'dbname=RSBD_DB_M host=eu-write user=AdamDev port=5432 password=AdamDev' publication logicalpub;
