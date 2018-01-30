module.exports = function (Transacao, Users, request, response, JWT, CHAVESECRETA, apiKey){
    let value = request.body.value
	let dest = request.body.dest
	let receivedApiKey = request.body.apiKey
	const tokenDoUsuario = request.body.token
	let password = request.body.password
	
	if(receivedApiKey === apiKey){
			if(tokenDoUsuario) {
			JWT.verify(tokenDoUsuario, CHAVESECRETA, function(erro, tokenDecodificado) {
				if(tokenDecodificado) {
				Users.findOne({"account":tokenDecodificado.account}, function (err, docs) {
					 docs.comparePassword(password, function(err, isMatch){
						if(err) throw err
						if(isMatch){
					if(docs.balance < value ){
						response.send({msg:"Saldo insuficiente"})
					} else{
						Users.findOne({"account":dest},function(err, doc){
						if(doc === null){
							response.send({msg:"Destinatário não encontrado"})
						} else if(doc.account === docs.account){
							response.send({msg:"Conta inválida"})
						} 
						else{
							docs.balance -= value
							log =
							 {	msg: "Transferência de " + value + " para " + doc.account + " no dia " + new Date(), 	account:docs.account,
								type:false,
								date: new Date(),
								destAccount: doc.account,
								destName: doc.name,
								value: -value
							}
							let instance = new Transacao(log)
							docs.logs.push(log)
							docs.save()
							instance.save(function (err) {
							if (err) return console.log(err)
							})
							log =
							 {	msg: "Depósito de  " + value + " recebido de " + doc.account + " no dia " + new Date(), 	account:doc.account,
								type:true,
								date: new Date(),
								destAccount: docs.account,
								destName: docs.name,
								value: value
							}
							instance = new Transacao(log)
							instance.save(function (err) {
							if (err) return console.log(err)
							})
							doc.balance += value
							doc.logs.push(log)
							doc.save()
							if (request.body.email){
								let email = require('../email/sendEmail')(docs, doc, value)
							}

							x = docs.logs.reverse()
							response.send(
								{msg:"Transação concluída!", seuSaldo:docs.balance, saldoDest: doc.balance, data: new Date(), balance:docs.balance, logs: x.slice(0,3)})
						}	
						})
					}
					
						}
					
					else{
						response.send({msg: "Senha inválida"})
					}})
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
