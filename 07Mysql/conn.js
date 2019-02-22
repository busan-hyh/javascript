var mysql       = require('mysql');
var dbConfig    = require('../../config/db-config.json');

var connection  = mysql.createConnection({
    host     : dbConfig.host,
    user     : dbConfig.user,
    password : dbConfig.password,
    database : dbConfig.database
});

module.exports = connection;