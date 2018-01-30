module.exports = function(Logs, Users, request, response, JWT, CHAVESECRETA, apiKey){
    let account = request.body.account
	let password = request.body.password
	let receivedApiKey = request.body.apiKey
	let expire
	if(request.body.logado){
		 expire = '1 day'
	} else {
		 expire = '10 minutes'
	}
	if (receivedApiKey === apiKey){
		Users.find({"account":account}, function (err, docs) {
        if(docs.length === 0){
      	  response.send({token:'', status: false})
		} 
		if (docs.length === 1){
        	 docs[0].comparePassword(password, function(err, isMatch){
             if(err) throw err
             if(isMatch){
                const token = JWT.sign(
                    {
                    account: docs[0].account,
                    password: docs[0].password,
                    accessLevel: 'admin'
                    },
                    CHAVESECRETA,
                    {
                    expiresIn: expire
                    }
				)
				
				log = {
					date: new Date(),
					account: docs[0].account,
					msg: `Novo login conta ${docs[0].account} data ${new Date()}`
				}

				novoLog = new Logs(log)
				novoLog.save(function (err) {
							if (err) return console.log(err)
							})
				
				Logs.find({}, function(err, docs){
					console.log(docs)
				})
                res = {token: token, status: true, name:docs[0].name, balance: docs[0].balance, account: docs[0].account, logs: docs[0].logs.reverse().slice(0, 3)}
                response.send(res)
			 } 
			 else {
				response.send({status:false, token:''})
			 }
         })
       
        }
    })

	}
	else {
		response.send({status:false})
	}
    

}
