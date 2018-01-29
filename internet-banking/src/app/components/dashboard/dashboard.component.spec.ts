import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule, MatIconModule, MatListModule, MatSnackBarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { Globals } from '../../model/Globals.module';
import { ExtratoService } from '../extrato/extrato.service';
import { TokenService } from '../../services/token.service';
import { ToasterService } from '../../services/toaster.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core/src/debug/debug_node';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let valorSaldo: DebugElement;
  let cartoes: DebugElement;
  let listaItensExtrato: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [Globals, ExtratoService, TokenService, ToasterService],
      imports: [
        MatCardModule,
        MatIconModule,
        MatListModule,
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MatSnackBarModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    component.data.balance = "99"

    valorSaldo = fixture.debugElement.query(By.css('.balance'))
    cartoes = fixture.debugElement.query(By.css('mat-card'))
    listaItensExtrato = fixture.debugElement.query(By.css('mat-list-item'))

    fixture.detectChanges();
  });

  it('componente criado', () => {
    expect(component).toBeTruthy();
  });

  it('cartão de transferência e extratos criado', () => {
    expect(cartoes).toBeTruthy();
  });

  it('lista de extratos NÃO criada quando NÃO há extratos', () => {
    // nulo pq a criacao desse elemento depende do ngIf, que condiciona a existencia dos logs
    expect(listaItensExtrato).toBeNull();
  });

  it('exibição do valor do saldo OK', () => {
    expect(valorSaldo.nativeElement.innerHTML).toBe("R$99.00")
  });

});
