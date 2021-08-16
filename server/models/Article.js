const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    title: { type: String },
    // mongoDB id 类型, ref 关联模型
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
    body: { type: String }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Article', schema)
