import express from "express"
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from "cookie-parser"
//import bcrypt from 'bcrypt'

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "medicinedb"
});

con.connect(function(err){
    if(err) {
        console.log("Error in Connection");
    }
    else {
        console.log("Connected");
    }
});

app.get('/getProduct', (req, res) => {
    const sql = "SELECT * FROM medicinetb";
    con.query(sql, (err, result) => {
        if(err) return res.json({Error: "Get product error in sql"});
        return res.json({Status: "Success", Result: result});
    });
});

app.get('/get/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM medicinetb where id = ?";
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Error: "Get product error in sql"});
        return res.json({Status: "Success", Result: result});
    });
});

app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const sql = "UPDATE medicinetb set itemname = ?, quantity = ? WHERE id = ?";
    con.query(sql, [req.body.itemname, req.body.quantity, id], (err, result) => {
        if(err) return res.json({Error: "update product error in sql"});
        return res.json({Status: "Success", Result: result});
    });
});

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    const sql = "Delete FROM medicinetb WHERE id = ?";
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Error: "delete product error in sql"});
        return res.json({Status: "Success"});
    });
});

app.post('/add', (req, res) => {
    const sql = "INSERT INTO medicinetb (itemname, quantity) VALUES (?, ?)";
    const values = [
        req.body.itemname,
        req.body.quantity
    ];
    con.query(sql, values, (err, result) => {
        if(err) return res.json({Error: "Error inserting item into database"});
        return res.json({Status: "Success", Result: result});
    });
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
