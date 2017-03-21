
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to database.');
    }
    console.log('Connected to database server.');

// db.collection('ToDos').deleteMany({text: 'Eat lunch'}).then((result) => {
//     console.log(result);
// });

// db.collection('ToDos').deleteOne({text: 'Eat lunch'}).then((result) => {
//     console.log(result);
// })
// db.collection('ToDos').findOneAndDelete({completed: false}).then((result) => {
//    console.log(result);
// });

//db.close

//db.collection('Users').deleteMany({firstName: 'Matt'}).then((result) => {
//    console.log(result);
//});

db.collection('Users').findOneAndDelete({
    _id: new ObjectID('58d02c4084e9bc794e9888d3')
    }).then((result) => {
    console.log(result);
});

});

/* db.collection('ToDos').find({
        _id: new ObjectID('58d029053d3fad78a55dd1a4')
    }).toArray().then((docs) => {
        
*/