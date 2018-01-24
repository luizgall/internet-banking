import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';


describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService],
      imports: [RouterTestingModule, HttpClientModule]
    });
  });

  it('servico criado', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
});
