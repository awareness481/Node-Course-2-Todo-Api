const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// const id = '59c155f11db92c6c25ed51a8';

// // Todo.find({
// //   _id: id
// // }).then(todos => {
// //   console.log('Todos', todos);
// // });

// // Todo.findOne({
// //   _id: id
// // }).then(todo => {
// //   console.log('Todo', todo);
// // });

// if (!ObjectID.isValid) {
//   console.log('ID is not valid');
// }

// Todo.findById(id).then(todo => {
//   if (!todo)
//     return console.log('ID not found!');
//   console.log('Todo By id', todo);
// }).catch(e => console.log(e));

const id = '59c107a9e1f256702f9c7305';

User.findById(id).then(user => {
  if (!user) return console.log('User not found!');

  console.log('User found!', user);
}).catch(e => console.log(e));

