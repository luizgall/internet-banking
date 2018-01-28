## Login

### public tryLogin(account, password)

#### Descrição
A função tryLogin() recebe dois parâmetros (account e password) e faz a autenticação na api (https://ng-bankline.herokuapp.com/api/login). Caso retorne `true`, o usuário tem acesso á sua conta. Se `false`, uma mensagem de erro retorna para o usuário solicitando que o mesmo verifique os dados inseridos ;

#### Parâmetros
account (number), password (number);

## Transferência

### public transfer(account, password, value, dest )

#### Descrição
A função transfer() recebe quatro parâmetros (token, value, dest e cb) e faz a autenticação na api (https://ng-bankline.herokuapp.com/api/transferencia);

#### Parâmetros
account(number), password(number), value(number), dest(number);

## Extrato

### public getExtract(account, cb)

#### Descrição
A função getExtract() recebe dois parâmetros (account e cb) e faz a autenticação na api (https://ng-bankline.herokuapp.com/api/extrato);

#### Parâmetros
account(any), cb(any);
