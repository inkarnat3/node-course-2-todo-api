// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// Test 2 below
// var obj = new ObjectID();
// console.log(obj);

// Test 1 below
// var user = {name: 'Matt', age: 33};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to database.');
    }
    console.log('Connected to database server.');
/*
    db.collection('ToDos').insertOne({
        text: 'something to do',
        completed: false

    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo ', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
});


// Users (name, age, location)

    db.collection('Users').insertOne({
        firstName: 'Matt',
        lastName: 'Walling',
        age: 33,
        location: 'Westlake, Ohio'

    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert name ', err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    });
*/  
    db.close();

});