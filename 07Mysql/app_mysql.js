var express = require('express');
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

app.use(express.json());
app.set('view engine', 'pug');
app.set('views', './views');
app.locals.pretty = true;

// /로가면 list.html 표시
app.get('/', function(req, res){

    var sql = 'SELECT * FROM TODO_LIST WHERE uid=?';
    var uid = 'test';
    conn.query(sql, uid, function(err, rows, fields){
        //res.send(rows)
        //res.render('list_or');
        res.render('list', {todos:rows});
        console.log(rows);
    });
});

app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));

});
