var express = require('express');
var router = express.Router();
var conn = require('./conn');

router.get('/', function(req, res, next){
    // 세션에 아이디가 있을때
    res.render('list'); //login.pug 실행
    // 없으면 다시 로그인으로
});

router.post('/', function(req, res, nest){

});

module.exports = router;