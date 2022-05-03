// 引入express
const express = require('express')

// 创建应用对象
const app = express()
const port = 3000

// 创建路由规则
app.get('/server',(request, response) =>{

  // 响应头 跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  // 响应体
  response.send('Hello express Get Request')

})

app.post('/server',(req, res) => {
  res.setHeader('Access-Control-Allow-Origin','*')

  res.send('Ajax Post Request')
})

// 监听端口启动服务
app.listen(port,() => { console.log(`Example app  listening on port ${port}`) })