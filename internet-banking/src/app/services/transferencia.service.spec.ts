import { TestBed, inject } from '@angular/core/testing';

import { TransferenciaService } from './transferencia.service';
import { HttpClientModule } from '@angular/common/http';

describe('TransferenciaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransferenciaService],
      imports: [HttpClientModule]
    });
  });

  it('servico criado', inject([TransferenciaService], (service: TransferenciaService) => {
    expect(service).toBeTruthy();
  }));
});
