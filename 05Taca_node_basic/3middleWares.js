const express = require('express')
const logger = require('morgan')

const app = express()

app.use(logger('dev'))
//dev옵션:개발환경용
//요청에 대한 응답 표시 : GET / 404 4.066 ms - 139 <<이렇게
//서버에서는 이런 요청을 기록해서 보내야함

app.listen(3000, () => console.log('running'))