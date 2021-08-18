const express = require('express')

const app = express()

// 全局秘钥
app.set('secret', 'pwd')

// 设置跨域
// app.use(require('cors')())

// 解析 json
app.use(express.json())

// app.use('/uploads', express.static(__dirname + '/uploads'))
// app.use('/admin', express.static(__dirname + '/admin'))
// app.use('/', express.static(__dirname + '/web'))

// 引入数据库连接
require('./plugins/db')(app)

// 引入 admin 路由
require('./routes/admin')(app)
// require('./routes/web')(app)

app.listen(9999, () => {
  console.log('http://localhost:9999')
})
