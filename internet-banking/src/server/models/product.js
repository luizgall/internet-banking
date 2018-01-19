// Dependencies 
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var userSchema = new mongoose.Schema({
    name: String,
    login: String,
    password: String,
    money: Number
});



// Return model
module.exports = restful.model('Products', userSchema);