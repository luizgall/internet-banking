// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Product = require('../models/product');

//Product.remove({}, function(err) { 
//    console.log('collection removed') 
// });



//carregar seeds 
Product.find({}, function (err, docs) {
   if(docs.length === 0){ // Se a coleção estiver vazia, popula o banco com os dados do seed.json
      var fs = require('../seed.json');
        for(let user of fs){
            var instancia = new Product(user);
            instancia.save(function (err) {
            if (err) return handleError(err)
            });}
   } else {
   }
  });


//check


// Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/productss');

// Return router
module.exports = router;