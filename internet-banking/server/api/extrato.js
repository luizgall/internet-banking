module.exports = function(Users, request, response, JWT, CHAVESECRETA, apiKey){  
  let account = request.body.account
  let requestApiKey = request.body.apiKey

  if(requestApiKey === apiKey){
		 Users.findOne({"account":account}, (err, doc) => {
          if (doc !== null){
               response.send({status:true, 
							logs: doc.logs
                    })
          }
  })} else{
		  response.send({status: false, msg: "ApiKey inválida"})
  }


}
