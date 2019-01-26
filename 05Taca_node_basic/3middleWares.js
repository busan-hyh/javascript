const express = require('express')
const logger = require('morgan')

const app = express()

app.use(logger('dev'))
//dev옵션:개발환경용
//요청에 대한 응답 표시 : GET / 404 4.066 ms - 139 <<이렇게
//서버에서는 이런 요청을 기록해서 보내야함

const mv = (req, res, next) => {
    //일반미들웨어
    //throw Error('error!') //일부러 에러발생
    next()
}
const errorMw = (err, req, res, next) => {
    //에러미들웨어
    console.log(err.message)
}

app.use(mv)
app.use(errorMw)

app.listen(3000, () => console.log('running'))