var express = require('express');
var app = express();
var conn = require('./routes/conn')

conn.connect();

app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.set('view engine', 'pug');
app.set('views', './views');
app.locals.pretty = true;

// 모듈 호출
app.get('/', function(req, res){
    res.render('login');
})

// /list로가면 list.html 표시
app.get('/list', function(req, res){

    var sql = 'SELECT * FROM TODO_LIST WHERE uid=?';
    var uid = 'test';//세션에서 불러온 id값??
    conn.query(sql, uid, function(err, rows, fields){
        res.render('list', {todos:rows});
        console.log(rows);
    });
});

app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));

});
