var express = require('express');
var router = express.Router();
var conn = require('./conn');

router.get('/', function(req, res, next){
    var seq = req.param('seq'); // changelist.js에서 넘어온 json seq
    var ldate = new Date();

    var sql = 'UPDATE `TODO_LIST` SET done=1, doneDate=? WHERE seq=?'
    conn.query(sql, [ldate, seq], function(err, rows, fields){
        res.redirect('/list');
    });
})

module.exports = router;