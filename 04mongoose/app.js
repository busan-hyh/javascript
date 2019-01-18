var mongoose = require('mongoose');
//모듈을 사용하려면 require를 먼저 해야한다 
//mongoose.connect('mongodb://192.168.111.112/test');
//몽고db 커넥트 형식
//하지만 보안을 위해 커넥트 주소도 모듈화 한다.
var config = require('./myModules/config.js');
mongoose.connect(config.dbUrl());

var db = mongoose.connection;
//몽고db 동작 
db.on('error', console.error.bind(console, 'connection error!'));
//접속이 되었는지 체크 
db.once('open', function(){
    //접속이 되었당
    console.log("mongo connected!");
});

