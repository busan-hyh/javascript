var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.set('view engine', 'pug');
app.set('views', './views');
app.locals.pretty = true;

var conn = require('./route/conn')
conn.connect();

// 각 모듈 호출
var showalldata = require('./route/showalldata');
app.use('/show', showalldata);


app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});