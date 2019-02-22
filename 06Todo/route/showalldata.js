var express = require('express');
var router = express.Router();
var conn = require('./conn');

router.get('/', function(req,res,next){
    res.send('show page')
    console.log('show!')
    if(err) console.log(err);
    conn.query('select * from TODO_LIST',function(err,row,fields){
        console.log(rows);
        var result = JSON.stringify(rows);
        res.send(result);
    });
})

module.exports = router;