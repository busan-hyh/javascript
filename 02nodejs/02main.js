var fs = require("fs");

//1.하나씩 실행되는 함수 모양 
//var data = fs.readFileSync('02input.txt');
//console.log(data.toString());
//console.log("Program has ended");

//2.한번에 실행되는 함수 모양---콜백---
//readFile을 함수로 읽으면서 다른 함수를 방해하지 않음
fs.readFile('02input.txt', function(err,data){
    if (err) return console.error(err);
    console.log(data.toString());
});
console.log("Program has ended");

//Blocking코드(1)를 사용하는 서버보다
//Non-Blocking코드(2)를 사용하는 서버가 더 많은 요청을 빠르게 처리함 