drop subscription if exists logicalsub cascade;
create subscription logicalsub connection 'dbname=RSBD_DB_M host=us-write-service user=AdamDev port=5604 password=AdamDev' publication logicalpub;
