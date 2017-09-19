const mongoose = require('mongoose');

mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
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