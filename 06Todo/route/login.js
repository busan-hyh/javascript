var express = require('express');
var router = express.Router();
var conn = require('./conn');

router.get('/', function(req, res, next){
    // console.log('login.js');
    res.render('login'); //login.pug 실행
});

router.post('/', function(req, res, nest){
    var uid = req.body.uid;
    var pass = req.body.pass;
    conn.query('SELECT * FROM `TODO_USER` WHERE uid=? AND pass=?', [uid,pass], function(err, rows, fields){
        if(rows[0] != undefined) {
            res.redirect('/list');
            // res.send(rows[0]['uid']+'님 반갑습니다.');
        } else {
            res.send('??');
        }
    })
});

module.exports = router;