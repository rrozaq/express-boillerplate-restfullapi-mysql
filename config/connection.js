'use strict'
const mysql = require('mysql');
require('dotenv').config();

const conn = mysql.createConnection({
    host: process.env.APP_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

conn.connect((err) => {
    if(err) {
        console.error(`Gagal konek ke database ${err}`)
    }else{
       console.log('Database sudah terhubung ✅')
    }
});

module.exports = conn;