//npm i express로 폴더에 모듈 다운로드
const express = require('express');
const app = express();

const mw = (req, res, next) => {
    //미들웨어, 주요함수의 중간단계같은거??
    //next는 콜백함수같이 순서개념
    console.log('mw!')
    next()
    //미들웨어에서는 next를 호출해야 그 다음으로 진행함
}

const mw2 = (req, res, next) => {
    //이렇게 미들웨어는 순서가 있음. 아래에서 부르는 순서대로 뜸
    console.log('mw222!')
    next()
}
app.use(mw2)
app.use(mw)

app.listen(3000, () => console.log('running'))
//express는 listen함수로 서버를 요청대기상태로 만든다.
//미들웨어용 서드파티가 매우 많고
//morgan은 로깅용 미들웨어