import { TestBed, inject } from '@angular/core/testing';

import { ChecarloginService } from './checarlogin.service';

describe('ChecarloginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChecarloginService]
    });
  });

  afterEach(() => {
    localStorage.clear()
  });


  it('servico criado', inject([ChecarloginService], (service: ChecarloginService) => {
    expect(service).toBeTruthy();
  }));

  // checando se, com token, usuario é considerado logado
  it('usuario com token continua logado', inject([ChecarloginService], (service: ChecarloginService) => {
    // seta um token imaginario
    localStorage.setItem("auth-token", "abcdefg123456")

    // armazena o result da funcao checarlogin
    let logado = service.isLogin()

    expect(logado).toBeTruthy()
  }));

  // checando se, com TOKEN NULO, usuario NÃO é considerado logado
  it('usuario com token NULO NÃO continua logado', inject([ChecarloginService], (service: ChecarloginService) => {
    // seta um token imaginario com valor nulo
    localStorage.setItem("auth-token", "")

    // armazena o result da funcao checarlogin
    let logado = service.isLogin()

    expect(logado).toBeFalsy()
  }));

  // checando se, SEM TOKEN, usuario NÃO é considerado logado
  it('usuario SEM token NÃO continua logado', inject([ChecarloginService], (service: ChecarloginService) => {
    // remove qualquer informação armazenada no localStorage para simular um usuario não logado
    localStorage.clear()

    // armazena o result da funcao checarlogin
    let logado = service.isLogin()

    expect(logado).toBeFalsy()
  }));

});
