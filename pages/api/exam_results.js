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

    //書いたSQLが実行される。
    const { rows: results } = await client.query('update kaitou set kaitousentaku_id = 5 where id = 1;')
    //複数件の場合は、そのままresultsを設定。
    res.status(200).json(results)
}