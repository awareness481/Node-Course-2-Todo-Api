const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("59c0eee6885734488c0cc8c4")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //     returnOriginal: false
  // }).then(res => {
  //   console.log(res);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("59bfc7036668e4252944246c")
    }, {
      $set: {
        name: 'Jes'
      },
      $inc: {
        age: 1
      }
    },
    {
      returnOriginal: false   
  }).then(res => {
    console.log(res);
  });


  // db.close();
});