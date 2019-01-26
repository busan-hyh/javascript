const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  //createServer는 서버 생성함수.
  //서버가 생성되면 아래 함수를 실행하라는 콜백함수▼
  console.log(req.url)
  if (req.url === '/') {
    res.statusCode = 200;//성공을 의미하는 200코드
    res.setHeader('Content-Type', 'text/plain');//이미지면 image..
    res.end('Hello World\n');//응답을 이걸로 끝내겠다! 포함문자가 body에 들어감
  } else if (req.url === '/users') {//이렇게 분기를 주는게 라우팅
    const users = [
      {name: 'Alice'},
      {name: 'Beck'}
    ]
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');//JSON파일읽을때 헤더값, 스펙 (http스펙문서 참고)
    res.end(JSON.stringify(users));//end함수로 응답할때는 문자열로 해야한다.
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});