const assert = require('http-assert')
const AdminUser = require('../models/AdminUser')
const jwt = require('jsonwebtoken')

module.exports = options => {
  return async (req, res, next) => {
    const token = String(req.headers.authorization || '')
      .split(' ')
      .pop()
    assert(token, 401, '请先登录')
    // 验证 token 解构 id
    const { id } = jwt.verify(token, req.app.get('secret'))
    assert(id, 401, '请先登录')
    req.user = await AdminUser.findById(id)
    assert(req.user, 401, '请先登录')
    await next()
  }
}
