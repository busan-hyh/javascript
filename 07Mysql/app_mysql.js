var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var mysql       = require('mysql');
var dbConfig    = require('../../config/db-config.json');

var conn        = mysql.createConnection({
    host     : dbConfig.host,
    user     : dbConfig.user,
    password : dbConfig.password,
    database : dbConfig.database
});
conn.connect();


app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: false }));
app.locals.pretty = true;

app.get('/', function(req, res){
    var sql = 'SELECT uid, content FROM TODO_LIST WHERE uid=?';
    var uid = 'test';
    conn.query(sql, uid, function(err, rows, fields){
        if(err) throw err;
        res.send(rows);
        // 계속 buffer type으로 표시되서 당혹;
    });
});

app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));

});
