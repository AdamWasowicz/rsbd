drop subscription if exists logicalsub cascade;
create subscription logicalsub connection 'dbname=RSBD_DB_M host=as-write-service user=AdamDev port=5606 password=AdamDev' publication logicalpub;
