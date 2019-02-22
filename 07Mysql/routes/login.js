var express = require('express');
var app = express.Router();
var conn = require('./conn');

app.get('/', function(req, res){
    res.render('login');
})