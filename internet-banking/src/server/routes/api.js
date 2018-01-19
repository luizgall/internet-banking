// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Product = require('../models/users');

//Product.remove({}, function(err) { 
//    console.log('collection removed') 
// });



//carregar seeds se banco estiver vazio
Product.find({}, function (err, docs) {
   if(docs.length === 0){ // Se a coleção estiver vazia, popula o banco com os dados do seed.json
      var fs = require('../seed.json');
        for(let user of fs){
            var instancia = new Product(user)
            instancia.save(function (err) {
            if (err) return handleError(err)
            });}
   }
  })




// Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/users');

// Return router
module.exports = router;