drop subscription if exists logicalsub cascade;
create subscription logicalsub connection 'dbname=RSBD_DB_M host=us-write user=AdamDev port=5432 password=AdamDev' publication logicalpub;
