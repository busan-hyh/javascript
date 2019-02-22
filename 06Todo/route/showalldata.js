var express = require('express');
var router = express.Router();
var conn = require('./conn');

router.get('/', function(req,res,next){
    console.log('show!')
    var sql = 'SELECT * FROM TODO_LIST WHERE uid=?';
    var uid = 'test';//세션에서 불러온 id값??
    conn.query(sql, uid, function(err, rows, fields){
        //res.render('login',{변수지정:rows}); pug view 랜더
        //res.send('텍스트 출력');
        console.log(rows);
    });
})

module.exports = router;