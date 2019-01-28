var mysql = require('mysql');
var conn = mysql.createConnection({
    host : '192.168.0.126',
    user : 'hyh',
    password : '1234',
    port : 3306,
    database : 'hyh'
});

conn.connect();

conn.query('SELECT * FROM Persons', function(err, rows, fields) {
    if(!err)
        console.log('The Solution is ', rows);
    else
        console.log('Error while Preforming Query', err);
});

conn.end();