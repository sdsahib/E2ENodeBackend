var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var user = new Schema({
    id: {
        type: Number
    },
    fname:{
        type: String
    },
    lname:{
        type: String
    },
    email:{
        type: String
    }
});

var users = mongoose.model('users',user);

module.exports = users;