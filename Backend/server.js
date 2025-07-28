const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(express.json());

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

    app.get("/", (req, res) => {
  const sql = "SELECT * FROM Workers";
  db.query(sql, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.json([data]); 
  })  
});
 app.post('/create', (req,res) =>{
  const sql= "INSERT INTO WORKERS(`Name`, `Email`) VALUES (?)";
  const values= [
    req.body.name,
    req.body.email
  ]
  db.query(sql, [values], (err, data) => {
    if (err) return res.json('error');
    return res.json(data);
  });
 })

 app.put('/update:id', (req,res) =>{
  const sql= "update workers set `Name` = ?, `Email` = ? where ID = ?";
  const values= [
    req.body.name,
    req.body.email
  ]
  const id= req.params.id
  db.query(sql, [...values, id], (err, data) => {
    if (err) return res.json('error');
    return res.json(data);
  });
 })


 
 app.delete('/workers:id', (req,res) =>{
  const sql= "DELETE FROM workes WHERE ID = ?";
  const id= req.params.id
  db.query(sql, [id], (err, data) => {
    if (err) return res.json('error');
    return res.json(data);
  });
 })


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
