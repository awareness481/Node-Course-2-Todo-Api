const mongoose = require('mongoose');

mongoose.promise = global.Promise;
mongoose.connect(procress.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};