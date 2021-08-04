const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3333;
const config = {
    host: 'db',
    port: 3306,
    user: 'root',
    password: 'root',
    database:'nodedb'
};

app.get('/', (req, res) => {

    var html = '<h1>Full Cycle</h1>';

    var con = mysql.createConnection(config);
     
    con.connect(function(err) {
        if (err) throw err;

        con.query("SELECT name FROM people", function (err, result, fields) {
            if (err) throw err; 
            html = `${html} <h2> ${result[0].name} </h2>`;
            res.send(html); 
        });
    }); 
})

app.listen(port, ()=> {
    console.log('Running in port: ' + port)
})