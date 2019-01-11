/*
var mysql = require('mariasql');

var connection = mysql.createConnection({
    host: '192.168.111.111',
    user: 'root',
    password: '6644',
    database: 'hyhnode'
});

connection.connect();

connection.query('SELECT * FROM USER', function (error, results, fields) {
    if(error){
        console.log(error);
    }
    console.log(results);
});

connection.end();
*/

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    post: 3000,
    user: 'root',
    password: '6644',
    database: 'hyhnode'
});

module.exports = connection;