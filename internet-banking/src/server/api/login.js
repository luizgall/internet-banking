module.exports = function(Users, request, response, JWT, CHAVESECRETA){
    let account = request.body.account
    let password = request.body.password
    Users.find({"account":account,"password":password}, function (err, docs) {
        if(docs.length === 0){
        response.send({token:'', status: false})
        } if (docs.length === 1){
        const token = JWT.sign(
            {
            account: docs[0].account,
            password: docs[0].password,
            accessLevel: 'admin'
            },
            CHAVESECRETA,
            {
            expiresIn: '2 days'
            }
        )
        res = {token: token, status: true}
        response.send(res)
        }
    })

}