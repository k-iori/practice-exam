import { Client } from 'pg'

export default async (req, res) => {
    const client = new Client ({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'password',
        port: 5432
    })
    client.connect()

    // 書いたSQLが実行される。下記の例は、現在時間
    const { rows: results } = await client.query('select current_timestamp')
    // 複数件の場合は、そのままresultsを設定。1件だとわかっている場合は[0]
    res.status(200).json(results[0])
}