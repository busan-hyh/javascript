var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

// app 설정
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.locals.pretty = true;
app.use(session({
    secret: 'aeglk@#e35m267rlms(#*&fhjd',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}));

// 모듈 호출
var login = require('./route/login');
app.use('/', login);
var list = require('./route/list');
app.use('/list', list);

// 포트 연결
app.listen(app.get('port'),'0.0.0.0', function(){
    console.log('Express server listening on port ' + app.get('port'));
});