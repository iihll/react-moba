const mongoose = require('mongoose')

module.exports = app => {
  mongoose.connect('mongodb://localhost:27017/moba', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })

  require('require-all')(require('path').join(__dirname, '../models'))
}
