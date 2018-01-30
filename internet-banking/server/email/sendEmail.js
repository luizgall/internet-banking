module.exports = function(user, dest, value){

    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nglinebanking@gmail.com',
        pass: 'ABC123456'
    }
    });
    var mailOptions = {
    from: 'nglinebanking@gmail.com',
    to: user.email,
    subject:"Nova transferencia" ,
	text:'Você transferiu '+ value + " para " + dest.name,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <!--[if !mso]><!-->
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <!--<![endif]-->
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                /* Basics */
                body {
                    margin: 0 !important;
                    padding: 0;
                    /* background-image: url(login-img.jpg); */
                    background-repeat: no-repeat;
                }
                table {
                    border-spacing: 0;
					font-family: sans-serif;

                }
                td {
                    padding: 0;
                }
                img {
                    border: 0;
                }
                div[style*="margin: 16px 0"] { 
                    margin:0 !important;
                }
                .wrapper {
                    width: 100%;
                    table-layout: fixed;
                    -webkit-text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                }
                .webkit {
                    max-width: 600px;
                    margin: 0 auto;
                }
                .outer {
                    Margin: 0 auto;
                    width: 100%;
                    max-width: 600px;
                }
                .full-width-image img{
                    width: 100%;
                    max-width:600px;
                    height: auto;
                }
                .inner {
                    padding:  10px;
                }
                p{
                    margin: 0;
                    color: black
                }
                .h1{
                    font-size: 21px;
                    font-weight: bold;
                    margin-bottom: 18px;
                }
                .h2{
                    font-size: 18px;
                    margin-bottom: 12px;
                }
        
                /* One column layout */
                .one-colum .contents {
                text-align: left;
                }
                .one-colum p{
                    font-size: 14px;
                    margin-bottom: 10px;
                }
            </style>
            <title></title>
            <!--[if (gte mso 9)|(IE)]>
            <style type="text/css">
                table {border-collapse: collapse;}
            </style>
            <![endif]-->
        </head>
        <body>
            <center class="wrapper">
                <div class="webkit">
                    <!--[if (gte mso 9)|(IE)]>
                    <table width="600" align="center">
                        <tr>
                            <td>
                                <![endif]-->
                                <table class="outer" align="center">
                                    <tr>
                                        <td class="inner contents">
                                            <p class="h1">
                                                Olá, ${user.name}
                                            </p>
                                            <p class="h2">
                                                Você realizou uma transferência para o usuário ${dest.name}. Consulte o seu extrato para mais informações.  <br/>
                                                Atenciosamente, <br/>
                                              
											</p>
											<br>
											<p class="h1">  NgLine </p>
                                        </td>
                                    </tr>
                                </table>
                                <!--[if (gte mso 9)|(IE)]>
                            </td>
                        </tr>
                    </table>
                    <![endif]-->            
                </div>
            </center>
        </body>
        </html> 
`
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nglinebanking@gmail.com',
        pass: 'ABC123456'
    }
    });
    var mailOptions = {
    from: 'nglinebanking@gmail.com',
    to: dest.email,
    subject:"Nova transferencia" ,
	html:`
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <!--[if !mso]><!-->
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <!--<![endif]-->
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                /* Basics */
                body {
                    margin: 0 !important;
                    padding: 0;
                    /* background-image: url(login-img.jpg); */
                    background-repeat: no-repeat;
                }
                table {
                    border-spacing: 0;
					font-family: sans-serif;

                }
                td {
                    padding: 0;
                }
                img {
                    border: 0;
                }
                div[style*="margin: 16px 0"] { 
                    margin:0 !important;
                }
                .wrapper {
                    width: 100%;
                    table-layout: fixed;
                    -webkit-text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                }
                .webkit {
                    max-width: 600px;
                    margin: 0 auto;
                }
                .outer {
                    Margin: 0 auto;
                    width: 100%;
                    max-width: 600px;
                }
                .full-width-image img{
                    width: 100%;
                    max-width:600px;
                    height: auto;
                }
                .inner {
                    padding:  10px;
                }
                p{
                    margin: 0;
                    color: black
                }
                .h1{
                    font-size: 21px;
                    font-weight: bold;
                    margin-bottom: 18px;
                }
                .h2{
                    font-size: 18px;
                    margin-bottom: 12px;
                }
        
                /* One column layout */
                .one-colum .contents {
                text-align: left;
                }
                .one-colum p{
                    font-size: 14px;
                    margin-bottom: 10px;
                }
            </style>
            <title></title>
            <!--[if (gte mso 9)|(IE)]>
            <style type="text/css">
                table {border-collapse: collapse;}
            </style>
            <![endif]-->
        </head>
        <body>
            <center class="wrapper">
                <div class="webkit">
                    <!--[if (gte mso 9)|(IE)]>
                    <table width="600" align="center">
                        <tr>
                            <td>
                                <![endif]-->
                                <table class="outer" align="center">
                                    <tr>
                                        <td class="inner contents">
                                            <p class="h1">
                                                Olá ${dest.name}
                                            </p>
                                            <p class="h2">
                                                Você recebeu uma transferência do usuário ${user.name}. Consulte seu extrato para mais informações.<br/>
                                                Atenciosamente, <br/>
                                              
											</p>
											<br>
											<p class="h1">  NgLine </p>
                                        </td>
                                    </tr>
                                </table>
                                <!--[if (gte mso 9)|(IE)]>
                            </td>
                        </tr>
                    </table>
                    <![endif]-->            
                </div>
            </center>
        </body>
        </html> 
`
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });


   
}



