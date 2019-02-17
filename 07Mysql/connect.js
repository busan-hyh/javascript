var mysql       = require('mysql');
var dbConfig    = require('../../config/db-config.json');

var conn        = mysql.createConnection({
    host     : dbConfig.host,
    user     : dbConfig.user,
    password : dbConfig.password,
    database : dbConfig.database
});

conn.connect();

// SELECT QUERY
var sqlSelect = 'SELECT * FROM TODO_USER';
conn.query(sqlSelect, function(err, rows, fields){
    if(err){
        console.log(err);
    } else {
        for(var i=0; i<rows.length; i++){
            console.log(rows[i].uid);
        }
    }
});

// INSERT QUERY
var sqlInsert = 'INSERT INTO TODO_USER (uid, pass, ip) VALUES(? ,?, ?)';
var paramsI = ['myuid', 'mypass', 'myip'];// ?치환자를 두는 방법. 보안에 활용됨
conn.query(sqlInsert, paramsI, function(err, rows, fields){
    if(err){
        console.log(err);
    } else {
            console.log(rows);
    }
});

// UPDATE QUERY
var sqlUpdate = 'UPDATE TODO_USER SET pass=?, ip=? WHERE uid=?';
var paramsU = ['yourpass', 'yourip', 'yourid'];
conn.query(sqlUpdate, paramsU, function(err, rows, fields){
    if(err){
        console.log(err);
    } else {
        console.log(rows);
    }
});

// DELETE QUERY
var sqlDelete = 'DELETE FROM TODO_USER WHERE uid=?';
var paramsD = ['yourid'];
conn.query(sqlDelete, paramsD, function(err, rows, fields){
    if(err){
        console.log(err);
    } else {
        console.log(rows);
    }
});

conn.end();