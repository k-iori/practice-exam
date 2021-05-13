/*新しいテーブル作成(mondaiset)*/
-- CREATE TABLE mondaiset
-- (id serial,
-- name text,
-- sakusei_nitiji timestamp,
-- PRIMARY KEY(id));

/*mondaisetテーブルの確認*/
-- SELECT *
-- FROM mondaiset;

/*新しいテーブル作成(mondai)*/
/*外部キーあり（referencesの後に外部キー設定）*/
-- CREATE TABLE mondai
-- (id serial,
-- mondaiset_id int references mondaiset(id),
-- mondaibun text,
-- sakusei_nitiji timestamp,
-- PRIMARY KEY(id));

/*mondaiテーブルの確認*/
-- SELECT *
-- FROM mondai;
			
/*新しいテーブル作成(sentakusi)*/
/*外部キーあり（referencesの後に外部キー設定）*/
-- CREATE TABLE sentakusi
-- (id serial,
-- mondai_id int references mondai(id),
-- hyouji_mei text,
-- hyouji_jun int,
-- PRIMARY KEY(id));
			
/*sentakusiテーブルの確認*/
-- SELECT *
-- FROM sentakusi;

/*新しいテーブル作成(kaitouset)*/
/*外部キーあり（referencesの後に外部キー設定）*/
-- CREATE TABLE kaitouset
-- (id serial,
-- mondaiset_id int references mondaiset(id),
-- kaisi_nitiji timestamp,
-- syuryo_nitiji timestamp,
-- sakusei_nitiji timestamp,
-- PRIMARY KEY(id));
			
/*kaitousetテーブルの確認*/
-- SELECT *
-- FROM kaitouset;

/*新しいテーブル作成(kaitou)*/
-- CREATE TABLE kaitou
-- (id serial,
-- kaitouset_id int references kaitouset(id),
-- mondai_id int references mondaiset(id),
-- seikai boolean,
-- kaitousentaku_id int,
-- sakusei_nitiji timestamp,
-- PRIMARY KEY(id));
			
/*kaitouテーブルの確認*/
-- SELECT *
-- FROM kaitou;

/*作成ミスしたため削除*/
-- DROP TABLE kaitou;

/*新しいテーブル再度作成(kaitou)*/
-- CREATE TABLE kaitou
-- (id serial,
-- kaitouset_id int,
-- mondai_id int,
-- seikai boolean,
-- kaitousentaku_id int,
-- sakusei_nitiji timestamp,
-- PRIMARY KEY(id));