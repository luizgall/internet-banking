// Dependencies 
var restful = require('node-restful');
var mongoose = restful.mongoose;
// Schema
var transSchema = new mongoose.Schema({
    account: 
    {type: Number,
    required: true,
    min: 1000,
    max: 9999},

	msg:{
		type: String,
		required: true},
	
	type:{
		type:Boolean,
		required:true
	},
	date:{
		type:Date,
		required:true
	},
	destAccount:{
		type:Number,
		required:true
	},

	destName:{
		type:String,
		required:true
	},
	value:{
		type:Number,
		required:true
	}



})

   
module.exports = restful.model('Transacao', transSchema);
