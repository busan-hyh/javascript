var express = require('express');
var router = express.Router();
var conn = require('./conn');

router.get('/', function(req, res, next){
    var seq = req.param('seq'); // changelist.js에서 넘어온 json seq

    var sql = 'DELETE FROM `TODO_LIST` WHERE seq=?'
    conn.query(sql, seq, function(err, rows, fields){
    });
})

module.exports = router;