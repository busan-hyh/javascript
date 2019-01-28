var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/test/:uid', function(req,res){
    // uid파라미터 받기
    conn.query('SELECT * FROM TODO WHERE uid=?', 
        [uid],
        function(err, rows, fields){
            res.json(rows);
            // res.json() - json 형태
            // res.end() - String및 XML등 json 형태가 아닌 형태 응답
    });
});