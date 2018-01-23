import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class LoginService {

  constructor(private http:HttpClient) { }

  // public testeLogin() {
  //   const testes = [
  //     testeSemUser: { user: "", senha: "1234", area: "testeSemUser", status: true },
  //     testeSemSenha: { user: "1234", senha: "", area: "testeSemSenha", status: true },
  //     testeSemNada: { user: "", senha: "", area: "testeSemNada", status: true },
  //     testeUserString: { user: "abdef", senha: "1234", area: "testeUserString", status: true },
  //     testeSenhaString: { user: "1234", senha: "abcdef", area: "testeSenhaString", status: true },
  //     testeUsuarioInexistente: { user: "1234", senha: "1234", area: "testeOK", status: true }
  //     testeOK: { user: "1001", senha: "12345", area: "testeOK", status: true }
  //   ];

  //   const resultadosEsperados = [false, false, false, false, false, false, true];

  //   const contador = 0;

  //   for (let teste of testes) {
  //     let resultado = tryLogin(teste.user, teste.senha);
  //     if (resultado != resultadosEsperados[teste.area]) {
  //       // não resultou no que era esperado
  //       teste.status = false
  //     }
  //   }

  //   return resultadosAtuais

  // }

  public tryLogin(account, password){
    let url = `http://localhost:3000/api/login`;
    this.http.post(url,{account: account, password: password})
    .subscribe(
      res => 
      {console.log(res)},
      err => {
        console.log(err) }
      // retornando o RES e ERR ao invés de dar console.log  
      // res => { return res },
      // err => { return err }
    )
  }

}