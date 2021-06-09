import { Client } from 'pg'

export default async (req, res) => {
    const client = new Client ({
        user: 'postgres',
        host: 'localhost',
        database: 'clsqltraining',
        password: 'password',
        port: 5432
    })
    client.connect()

    //書かれたSQLが実行される。下記の例は、問題集の一覧を返すAPI
    const { rows: results } = await client.query('SELECT id,name FROM mondaiset')
    //複数件の場合は、そのままresultsを設定。1件だとわかっている場合は[0]
    res.status(200).json(results)
}