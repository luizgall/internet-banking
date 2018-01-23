import { TestBed, inject } from '@angular/core/testing';

import { ChecarloginService } from './checarlogin.service';

describe('ChecarloginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChecarloginService]
    });
  });

  it('should be created', inject([ChecarloginService], (service: ChecarloginService) => {
    expect(service).toBeTruthy();
  }));
});
