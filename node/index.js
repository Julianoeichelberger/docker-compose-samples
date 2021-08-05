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
     
    var random_name = require('node-random-name');
    const name = random_name();
    var names = '';

    var con = mysql.createConnection(config);

    con.connect(function(err) {
        if (err) throw err;

        con.query(`INSERT INTO people(name) values('${name}')`);

        con.query("SELECT name FROM people", function (err, result, fields) {
            if (err) throw err; 

            result.forEach(item => {                
                names = `${names} <h4> - ${item.name} </h4>`;
            });
            ;
            res.send(`<h1>Full Cycle</h1> ${names}`); 
        });
    }); 
})

app.listen(port, ()=> {
    console.log('Running in port: ' + port)
})