module.exports = function (Users, request, response, JWT, CHAVESECRETA, apiKey){
    let value = request.body.value
	let dest = request.body.dest
	let receivedApiKey = request.body.apiKey
	console.log("Received: ", receivedApiKey)
	console.log("Api: ", apiKey)
	const tokenDoUsuario = request.body.token
	
	if(receivedApiKey === apiKey){
			if(tokenDoUsuario) {
			JWT.verify(tokenDoUsuario, CHAVESECRETA, function(erro, tokenDecodificado) {
				if(tokenDecodificado) {
				Users.find({"account":tokenDecodificado.account}, function (err, docs) {
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
							log = {msg: "Transferência de " + value + " para " + doc.account + " no dia " + new Date(), 
								date: new Date,
								fromUser: docs[0].account,
								toUser: doc.account,
								value: value}
							docs[0].logs.push(log)
							docs[0].save()
							doc.balance += value
							doc.logs.push(log)
							doc.save()
						// let email = require('./email/sendEmail')(docs[0], doc, value)
							response.send({msg:"Sucesso!!!", seuSaldo:docs[0].balance, saldoDest: doc.balance, data: new Date()})
						}
						})
					}
					}
				})
		
				} else {
				response.send({msg:'Esse token é inválido, faça login novamente.'})
				}
			})
			} else {
			response.send({msg:'Nenhum token encontrado'})
			} 
	} else{
		response.send({msg:'ApiKey inválida'})
	}
}
