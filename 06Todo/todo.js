var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

// app 설정
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
app.use('/todo', login);
var list = require('./route/list');
app.use('/list', list);
var doToDone = require('./route/doToDone');
app.use('/doToDone', doToDone);
var doneToDo = require('./route/doneToDo');
app.use('/doneToDo', doneToDo);
var delDo = require('./route/delDo');
app.use('/delDo', delDo);
var delDone = require('./route/delDone');
app.use('/delDone', delDone);

module.exports = app;