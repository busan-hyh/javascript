var mysqlDB = require('./mysql');
mysqlDB.connect();
/*
const express = require('express')
const app = express()
 
app.get('/', (req, res) => res.send('Hello World!'))
 
app.listen(3000, () => console.log('Example app listening on port 3000!'))
*/
/*
var mariaSql = require('mariasql');
conn = new mariaSql();
conn.connect({
	host: '192.168.111.111',
	port: 3306,
	user: 'root',
	password: '6644',
	database: 'hyhnode',
});

conn.on('connect', function(){
	console.log('MariaDB connected');
}).on('error', function(err){
	console.log("error " + err);
}).on('close', function(hadError){
	console.log("closed");
});
*/