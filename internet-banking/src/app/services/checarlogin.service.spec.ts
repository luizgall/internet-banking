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

});
