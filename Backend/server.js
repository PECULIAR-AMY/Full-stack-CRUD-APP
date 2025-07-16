const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'amypeculiar'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL');
});

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(3306, () => {
    console.log('Server is running on http://localhost:3306');
});
