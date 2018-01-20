// Dependencies 
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var userSchema = new mongoose.Schema({
    name: String,
    account: Number,
    password: Number,
    balance: Number,
    logs: Array
});

// Return model
module.exports = restful.model('User', userSchema);
