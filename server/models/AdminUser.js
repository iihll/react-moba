const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: { type: String },
  password: {
    type: String,
    // 设置 false 数据查询时查不出
    select: false,
    set(val) {
      return require('bcryptjs').hashSync(val)
    }
  }
})

module.exports = mongoose.model('AdminUser', schema)
