import { TestBed, inject, async } from '@angular/core/testing';

import { LoginService } from './login.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService],
      imports: [RouterTestingModule, HttpClientModule, HttpClientTestingModule]
    });
  });

  it('servico criado', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));

  // Login => usuario OK, senha OK
  it(`Login: usuario OK, senha OK`,
    async(
      inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {

        http.post('http://localhost:3000/api/login', {
          account: 1001, 
          password: 123456, 
          apiKey: "1c24171393dc5de04ffcb21f1182ab28", 
          logado: false
        }).subscribe();

        backend.match({
          url: 'http://localhost:3000/api/login',
          method: 'POST'
        })[0].flush({ status: true });
      })
    )
  );

  // Login => usuario ERRADO, senha OK
  it(`Login: usuario ERRADO, senha OK`,
    async(
      inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {

        http.post('http://localhost:3000/api/login', {
          account: 1051, 
          password: 123456, 
          apiKey: "1c24171393dc5de04ffcb21f1182ab28", 
          logado: false
        }).subscribe();

        backend.match({
          url: 'http://localhost:3000/api/login',
          method: 'POST'
        })[0].flush({ status: false });
      })
    )
  );

  // Login => usuario OK, senha ERRADA
  it(`Login: usuario OK, senha ERRADA`,
    async(
      inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {

        http.post('http://localhost:3000/api/login', {
          account: 1001, 
          password: 153456, 
          apiKey: "1c24171393dc5de04ffcb21f1182ab28", 
          logado: false
        }).subscribe();

        backend.match({
          url: 'http://localhost:3000/api/login',
          method: 'POST'
        })[0].flush({ status: false });
      })
    )
  );

  // Login => usuario ERRADO, senha ERRADA
  it(`Login: usuario ERRADO, senha ERRADA`,
    async(
      inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {

        http.post('http://localhost:3000/api/login', {
          account: 1051, 
          password: 123756, 
          apiKey: "1c24171393dc5de04ffcb21f1182ab28", 
          logado: false
        }).subscribe();

        backend.match({
          url: 'http://localhost:3000/api/login',
          method: 'POST'
        })[0].flush({ status: false });
      })
    )
  );

  // Login => com APIKey NULA/VAZIA
  it(`Login: usuario OK, senha OK, com APIKey NULA/VAZIA`,
    async(
      inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {

        http.post('http://localhost:3000/api/login', {
          account: 1001, 
          password: 123456, 
          apiKey: "1ABC4171393dc5de04ffcb21f1182ab28", 
          logado: false
        }).subscribe();

        backend.match({
          url: 'http://localhost:3000/api/login',
          method: 'POST'
        })[0].flush({ status: false });
      })
    )
  );

  // Login => usuario OK, senha OK, statusLogado TRUE
  it(`Login: usuario ERRADO, senha OK`,
    async(
      inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {

        http.post('http://localhost:3000/api/login', {
          account: 1001, 
          password: 123456, 
          apiKey: "1c24171393dc5de04ffcb21f1182ab28", 
          logado: true
        }).subscribe();

        backend.match({
          url: 'http://localhost:3000/api/login',
          method: 'POST'
        })[0].flush({ status: false });
      })
    )
  );

});
