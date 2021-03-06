// Dependencies 
var restful = require('node-restful');
var mongoose = restful.mongoose;

var CounterSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    seq: { type: Number, default: 0 }
});
var counter = mongoose.model('counter', CounterSchema);

// Schema
var logSchema = new mongoose.Schema({
    account: 
    {type: Number,
    required: true,
    min: 1000,
    max: 9999},

	msg:{
		type: String,
		required: true},

	date:Date
})

   
module.exports = restful.model('Log', logSchema);
