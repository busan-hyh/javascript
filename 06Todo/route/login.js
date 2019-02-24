var express = require('express');
var router = express.Router();
var conn = require('./conn');
var check = '새로운 아이디를 입력하면 새로 가입됩니다.';

router.get('/', function(req, res, next){
    if(req.session.username) {
        res.redirect('/list'); // 세션에 아이디가 있을때는 리스트로 리다이렉트
    } else {
        res.render('login',{check:check}); //login.pug 실행
    }
});

router.post('/', function(req, res, nest){
    var uid = req.body.uid;
    var pass = req.body.pass;
    var sess = req.session;
    var uip = req.headers['x-forwarded-for'] ||  req.connection.remoteAddress;
    var ldate = new Date();

    conn.query('SELECT COUNT(*) FROM `TODO_USER` WHERE uid=?', uid, function(err, rows, fields){
        if(rows[0]['COUNT(*)'] == 1){
            //id가 있으면
            conn.query('SELECT * FROM `TODO_USER` WHERE uid=? AND pass=?', [uid,pass], function(err, rows, fields){
                if(rows[0] != null){
                    //pw가 맞으면
                    conn.query('UPDATE `TODO_USER` SET ldate=? WHERE uid=?', [ldate, uid], function(err,rows,fields){})
                    sess.username=uid;
                    res.redirect('/list');
                } else {
                    //pw가 틀리면
                    check='비밀번호가 틀렸습니다.';
                    res.render('login',{check:check});
                }
            });
        } else if(rows[0]['COUNT(*)'] == 0) {
            //id가 없으면
            conn.query('INSERT INTO `TODO_USER`(uid,pass,ip,ldate) VALUES(?,?,INET_ATON(?),?)', [uid,pass,uip,ldate], function(err, rows, fields){
                sess.username=uid;
                res.redirect('/list');
            });
        }
    })
});

module.exports = router;