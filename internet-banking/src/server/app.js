// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

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
  let account = request.body.account
  let password = request.body.password
  Users.find({"account":account,"password":password}, function (err, docs) {
    if(docs.length === 0){
      response.send(false)
    } if (docs.length === 1){
      response.send(true)
    }
  })

});


app.post('/api/transferencia', function(request, response){
  let account = request.body.account
  let password = request.body.password
  let value = request.body.value
  let dest = request.body.dest

  // Conferir senha
  Users.find({"account":account,"password":password}, function (err, docs) {
    if(docs.length === 0){
      response.send({msg:"Senha inválida"})
    } else if (docs.length === 1){
      if(docs[0].balance < value ){
        response.send({msg:"Saldo insuficiente"})
      } else{
        Users.findOne({"account":dest},function(err, doc){
          if(doc === null){
            response.send({msg:"Destinatário não encontrado"})
          } else{
            docs[0].balance -= value
            docs[0].save()
            doc.balance += value
            doc.save()
            let email = require('./email/sendEmail')(docs[0], doc, value)
            response.send({msg:"Sucesso!", seuSaldo:docs[0].balance, saldoDest: doc.balance, data: new Date()})
          }
        })
      }
    }
  })
})




app.post('/api/extrato', function(request, response){

  

})

// Start server
app.listen(3000);
console.log('Listening on port 3000...');   


function login(account, password){

}

function getUserBalance(account){
  Users.find({"account":account}, function(err, docs){
      return true
  })
}