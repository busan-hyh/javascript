var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
    console.log("1 커넥션 성공");

    eventEmitter.emit("2 데이터 받음");
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function(){
    console.log("3 데이터 받음");
});

eventEmitter.emit('connection');

console.log("4 끝");