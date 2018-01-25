// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

const JWT = require('jsonwebtoken')
const CHAVESECRETA = 'ADD901ODKFJUCJNW82319'

const apiKey = require('./api/apiKey.json')['key']


// MongoDB
mongoose.connect('mongodb://localhost/rest_test');
mongoose.Promise = global.Promise;


// Express
var app = express();
app.set('json spaces', 40);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


  
var Users = require('./models/users');

 //carregar seeds se banco estiver vazio
Users.find({}, function (err, docs) {
   if(docs.length === 0){ // Se a coleção estiver vazia, popula o banco com os dados do seed.json
      var fs = require('./seed.json');
        for(let user of fs){
            var instancia = new Users(user)
            instancia.save(function (err) {
            if (err) return handleError(err)
            });}
   }
  })


app.use('/api', require('./routes/api'));

// Definir rotas da api
app.post('/api/login', function(request, response){
  require('./api/login')(Users, request, response, JWT, CHAVESECRETA, apiKey)
});


app.post('/api/transferencia', function(request, response){
 require('./api/transferencia')(Users, request, response, JWT, CHAVESECRETA, apiKey)
})




app.post('/api/extrato', function(request, response){
  let account = request.body.account
  Users.findOne({"account":account}, function(err,docs){
    if (docs !== null){
      response.send({status: true, msg:"Sucesso!!!", balance:docs.balance, logs: docs.logs})
    } else {
      response.send ({status: false, msg: "Usuário não encontrado"})
    }
    
  })

})

app.post('/api/user', (request,response) => {
  JWT.verify(request.body.token, CHAVESECRETA, function(erro, tokenDecodificado) {
    if(tokenDecodificado) {
     
      Users.findOne({"account":tokenDecodificado.account}, (err, doc) => {
          if (doc !== null){

               response.send({status:true, 
                            balance:doc.balance, 
                      logs: doc.logs, 
                      account: doc.account,
                      username: doc.name
                    })
          }
          else{
              response.send({status:false, msg: "Usuário não encontrado"})
          }
      })
    } 
    else{
      response.send({status:false, msg: "Token inválido"})
    }
  })
})
  

// Start server
app.listen(3000);
console.log('Listening on port 3000...');   

