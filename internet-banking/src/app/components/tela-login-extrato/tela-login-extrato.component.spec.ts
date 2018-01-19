import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaLoginExtratoComponent } from './tela-login-extrato.component';

describe('TelaLoginExtratoComponent', () => {
  let component: TelaLoginExtratoComponent;
  let fixture: ComponentFixture<TelaLoginExtratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaLoginExtratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaLoginExtratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
