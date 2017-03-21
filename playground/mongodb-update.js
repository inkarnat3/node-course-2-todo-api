
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to database.');
    }
    console.log('Connected to database server.');
/*
db.collection('ToDos').findOneAndUpdate({
    _id: new ObjectID('58d1748913c92b35a6d004a5')
}, {
    $set: {
        completed: true
    }
}, {
    returnOriginal: false
}).then((result) => {
    console.log(result);
});
*/

db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58d02e960aa51579b734ce73')
}, { 
    $set: {
        firstName: 'Matt'},
    $inc: {
        age: 31
    }    
}, {
    returnOriginal: false
}).then((result) => {
    console.log(result);
});

//db.close();
});