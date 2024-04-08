const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/easybook', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose;
