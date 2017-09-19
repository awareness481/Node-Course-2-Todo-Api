const mongoose = require('mongoose');

mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});


// const newTodo = new Todo({
//   text: 'Cook Dinner'
// });

// newTodo.save().then(doc => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });

const chTodo = new Todo({
  text: 'Some text',
  completed: true,
  completedAt: 15
});

chTodo.save().then(doc => {
  console.log('Saved todo', doc);
}, (e) => {
  console.log('Unable to save todo');
});

// User mongoose model

const User = mongoose.model('User', {
  email: {
    type: 'String',
    required: true,
    minlength: 1,
    trim: true
  }
});

const newUser = new User({
  email: 'example@email.com'
});

newUser.save().then(doc => {
  console.log('Saved user', doc);
}, (e) => {
  console.log('Unable to save user');
});