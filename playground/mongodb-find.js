
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to database.');
    }
    console.log('Connected to database server.');

//    db.collection('ToDos').find().toArray().then((docs) => {

//    db.collection('ToDos').find({completed:false}).toArray().then((docs) => {
/*

    db.collection('ToDos').find({
        _id: new ObjectID('58d029053d3fad78a55dd1a4')
        }).toArray().then((docs) => {
        
        console.log('ToDos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

//    db.close();
    db.collection('ToDos').find().count().then((count) => {
        console.log(`ToDos count: ${count}`);
        
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

*/

    db.collection('Users').find({firstName: 'Matt'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Error');
    });


});