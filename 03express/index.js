var express = require('express');
var mysql = require('mysql');
var dbconfig = require('./config/database.js');
var conn = mysql.createConnection(dbconfig);

var app = express();

//conn.connect();
app.set('port', process.env.PORT || 3000);
app.get('/', function(req, res){
    res.send('Root');
});

app.get('/persons', function(req, res){
    conn.query('SELECT * FROM Persons', function(err, rows) {
        if(err) throw err;
        
        console.log('The Solution is ', rows);
        res.send(rows);
    });
})

app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});


//conn.end();