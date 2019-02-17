var mysql       = require('mysql');
var dbConfig    = require('../../config/db-config.json');

var conn        = mysql.createConnection({
    host     : dbConfig.host,
    user     : dbConfig.user,
    password : dbConfig.password,
    database : dbConfig.database
});

conn.connect();

var sql = 'SELECT * FROM TODO_USER';
conn.query(sql, function(err, rows, fields){
    if(err){
        console.log(err);
    } else {
        console.log('rows', rows);
        console.log('fields', fields);
    }
})

conn.end();