import { TestBed, inject } from '@angular/core/testing';

import { ExtratoService } from './extrato.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ExtratoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExtratoService],
      imports: [RouterTestingModule, HttpClientModule]
    });
  });

  it('servico criado', inject([ExtratoService], (service: ExtratoService) => {
    expect(service).toBeTruthy();
  }));
});
