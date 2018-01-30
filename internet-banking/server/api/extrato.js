module.exports = function(Users, request, response, JWT, CHAVESECRETA, apiKey){  
  let account = request.body.account
  let requestApiKey = request.body.apiKey
  let len = request.body.len
  if(requestApiKey === apiKey){
		 Users.findOne({"account":account}, (err, doc) => {
          if (doc !== null){
			  x = doc.logs.reverse()
			  y = doc.logs.slice(len,len+3)
			  z = doc.logs.slice(len+3, len+6)
			if(z.length === 0){
				carregarMais = false
			} else {
				carregarMais = true
			}
			if(y.length === 0){
				response.send({status:true, msg:"Não há mais extratos."})
			}
			else{
				
				response.send({status:true, 
							logs: y, carregarMais:carregarMais
                    })

			}

          }
  })} else{
		  response.send({status: false, msg: "ApiKey inválida"})
  }


}
