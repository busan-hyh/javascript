var express = require('express');
var router = express.Router();
var conn = require('./conn');

router.get('/', function(req, res, next){
    var uid = req.session.username;
    // 세션에 아이디가 있을때
    if(uid){
        var uidTitle = uid;

        var sql_list = 'SELECT DATE_FORMAT(doneDate,"%Y-%m-%d") D, T.* ';
            sql_list += 'FROM `TODO_LIST` AS T WHERE uid=? ORDER BY T.doneDate DESC';
        conn.query(sql_list, uid, function(err,dolist,fields){
            var dolists = [];
            var donelists = [];
            for(var i in dolist){
                if(dolist[i]['done'] == 0){
                    dolists.push(dolist[i]);
                }
                if(dolist[i]['done'] == 1) {
                    donelists.push(dolist[i]);
                }
            }

            var sql_donedate = 'SELECT DATE_FORMAT(doneDate,"%Y-%m-%d") D FROM `TODO_LIST` AS T ';
            sql_donedate += 'WHERE T.done=1 And uid=? GROUP BY D ORDER BY T.doneDate DESC';
            conn.query(sql_donedate, uid, function(err,donedate,fields){
                res.render('list',{name:uidTitle, doTodos:dolists, donedate:donedate, doneTodos:donelists});
            })
        })
    } else {
        res.redirect('/'); // 없으면 다시 로그인으로
    }
});

router.post('/', function(req, res, next){
    var uid = req.session.username;
    var content = req.body.inputtext;
    var sql = "INSERT INTO `TODO_LIST` (uid, content) VALUE (?, ?)";

    conn.query(sql,[uid,content],function(err,rows,fields){
        if(err) throw err;
        res.redirect('/list');
    });
});

module.exports = router;