var mongoose = require('mongoose');

var Users = mongoose.model('Users', {
    emailAddress: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {Users};