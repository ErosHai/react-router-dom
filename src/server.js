const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', "*")

  res.send('hello express')
})

app.post('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', "*")

  const person = {
    name: 'zhangsan',
    age: 20,
    job: {
      dollar: 10000,
      type: 'Enginner'
    }
  }

  res.send(person)
})

app.get('/server', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', "*")

  const person = {
    name: 'lisi',
    age: 20,
    job: {
      dollar: 10000,
      type: 'Enginner'
    }
  }

  res.send(person)
})

app.listen(port, () => {
  console.log(`example app listening on ${port}`);
})