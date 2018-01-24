// Dependencies 
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    account: 
    {type: Number,
    required: true,
    min: 1000,
    max: 9999},


    password:
       {type: Number,
        required: true,
        min: 100000,
        max: 999999},
    balance: Number,
    logs: Array,
    email: 
       {type: String,
        required: true}
    })

// Return model
module.exports = restful.model('User', userSchema);
