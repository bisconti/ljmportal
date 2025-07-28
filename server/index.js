// DB 설정 JS
// dotenv : 환경변수를 효과적으로 관리하기 위한 라이브러리
require('dotenv').config(); // env 파일 가져오기
const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 5000;

// postgreSQL 연결 pool setting
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

// DB 연결
pool.connect()
    .then(client => {
        console.log('PostgreSQL connected successfully...');
        client.release();   // 연결 해제 (pool에 반환)
    })
    .catch(err => {
        console.error('Error connecting to PostgreSQL: ', err);
    });

app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');

        console.log(result.rows);

        res.json({
            userData: result.rows
        });
    } catch (err) {
        console.log(err.message);
    }
    //res.send('Hello World');
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
});

