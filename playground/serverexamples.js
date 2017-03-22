/*

var newTodo = new Todo({
    text: 'Cook dinner'
});


newTodo.save().then((doc) => {
    console.log('Saved todo', doc);

}, (e) => {
    console.log('Unable to save todo')

});

var otherTodo = new Todo({
    text: ' Edit this video  '
});

otherTodo.save().then((doc) => {
    console.log(JSON.stringify(doc,undefined, 2));
}, (e) => {
    console.log('Unable to save todo', e);
});
*/

var newUser = new Users({
    emailAddress: '  inkarnat3@gmail.com  '
});

newUser.save().then((data) => {
    console.log(JSON.stringify(data, undefined, 2));
}, (e) => {
    console.log('Unable to create user', e);
});

// User model e-mail, password
// set e-mail property only, required and trimmed
// set type as string and min length as 1

