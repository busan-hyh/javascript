const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  //createServer는 서버 생성함수.
  //서버가 생성되면 아래 함수를 실행하라는 콜백함수▼
  res.statusCode = 200;//성공을 의미하는 200코드
  res.setHeader('Content-Type', 'text/plain');//이미지면 image..
  res.end('Hello World\n');//응답을 이걸로 끝내겠다! 포함문자가 body에 들어감
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});