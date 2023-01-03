drop subscription if exists logicalsub cascade;
create subscription logicalsub connection 'dbname=RSBD_DB_M host=eu-write-service user=AdamDev port=5602 password=AdamDev' publication logicalpub;
