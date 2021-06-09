import { Client } from 'pg'

export default async (req, res) => {
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'clsqltraining',
        password: 'password',
        port: 5432
    })
    client.connect()

    //書いたSQLが実行される。下記の例は、問題集に紐づく問題の一覧を返すAPI
    const { rows: results } = await client.query('SELECT mondai.mondaibun,sentakusi.hyouji_mei FROM mondai INNER JOIN sentakusi ON mondai.id = sentakusi.mondai_id')
    //複数件の場合は、そのままresultsを設定。
    res.status(200).json(results)
}