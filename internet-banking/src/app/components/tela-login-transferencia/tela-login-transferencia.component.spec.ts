import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaLoginTransferenciaComponent } from './tela-login-transferencia.component';

describe('TelaLoginTransferenciaComponent', () => {
  let component: TelaLoginTransferenciaComponent;
  let fixture: ComponentFixture<TelaLoginTransferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaLoginTransferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaLoginTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
