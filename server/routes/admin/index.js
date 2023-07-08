const express = require('express')
const router = express.Router({ mergeParams: true })
const multer = require('multer')
const AdminUser = require('../../models/AdminUser')
const assert = require('http-assert')
const jwt = require('jsonwebtoken')

module.exports = app => {
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  // 资源列表
  router.get('/', async (req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find()
      // populate 关联查询该字段
      // .populate('parent')
      .setOptions(queryOptions)
      // 添加查询限制
      .limit(100)
    res.send(items)
  })
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id)
    res.send({
      success: true
    })
  })

  // 登录校验中间件
  const authMiddleware = require('../../middlewares/auth')
  const resourceMiddleware = require('../../middlewares/resource')
  app.use(
    '/admin/api/rest/:resource',
    authMiddleware(),
    resourceMiddleware(),
    router
  )

  // dest 属性 根目录
  const upload = multer({ dest: 'uploads/' })
  app.post(
    '/admin/api/upload',
    authMiddleware(),
    upload.single('file'),
    async (req, res) => {
      const file = req.file
      file.url = `http://120.55.101.119/uploads/${file.filename}`
      res.send(file)
    }
  )

  // 登录接口
  app.post('/admin/api/login', async (req, res) => {
    const { username, password } = req.body
    // 1.根据用户名找用户
    // +password 强制取出
    const user = await AdminUser.findOne({ username }).select('+password')
    assert(user, 422, '用户不存在')
    // 2.校验密码
    // compare 比较明文和密文
    const isValid = require('bcrypt').compareSync(password, user.password)
    assert(isValid, 422, '密码错误')
    // 3.返回token
    const token = jwt.sign({ id: user._id }, app.get('secret'))
    res.send({ token })
  })

  // 错误处理函数
  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}
