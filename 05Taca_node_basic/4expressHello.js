const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello! Express!'))
// '/'는 '/users'로 갔을때와 분기점을 만드는것처럼 할수있음(라우팅)

const users = [{name:'Hwa'}, {name:'Lim'}] //todo

app.get('/users', (req, res) => res.json(users))

app.listen(3000, () => console.log('running'))