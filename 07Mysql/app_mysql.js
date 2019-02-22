var express = require('express');
var app = express();
var conn = require('./conn')
conn.connect();

app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.set('view engine', 'pug');
app.set('views', './views');
app.locals.pretty = true;

app.get('/', function(req, res){
    res.render('login');
    // https://kamang-it.tistory.com/entry/NodeJSNodeJS%EC%99%80-MysqlMariaDB%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0-expressJS-%EC%83%81%EC%97%90%EC%84%9C-%EA%B0%84%EB%8B%A8%ED%95%9C-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85%EB%A1%9C%EA%B7%B8%EC%9D%B8%ED%9A%8C%EC%9B%90%ED%83%88%ED%87%B4-%EA%B5%AC%ED%98%84
    // https://cheese10yun.github.io/passport-mysql/

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
