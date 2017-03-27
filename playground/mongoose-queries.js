const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/user');

var id = '58d2c9b26375d9495c5c39b4';

// Users db, User.findByID 3 cases - query works, but no user, user was found
// and error handling

Users.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));


/*

var id = '58d96b207ca7a149d5d47de111';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

*/

/*

Todo.find({
    _id: id
}).then((todos) => {
    console.log('todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('todo', todo);
});

*/

/*

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo by ID', todo);
}).catch((e) => console.log(e));

*/

