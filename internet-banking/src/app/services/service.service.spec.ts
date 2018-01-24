import { TestBed, inject } from '@angular/core/testing';

import { ServiceService } from './service.service';
import { HttpClientModule } from '@angular/common/http';

describe('ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceService],
      imports: [HttpClientModule]
    });
  });

  it('servico criado', inject([ServiceService], (service: ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
