var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/rest_test');
mongoose.Promise = global.Promise;

var app = express();
app.set('json spaces', 40);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


var Logs = require('./models/logs')

Logs.find({}, function(err, docs){
	x = docs.reverse()
	for(let doc of docs){
		console.log("")
		console.log(doc.msg)
		console.log("")
	}
})
