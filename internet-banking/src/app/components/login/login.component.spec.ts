import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'
import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { MatCardModule, MatIconModule, MatFormFieldModule, MatSlideToggleModule, MatSnackBar, MatSnackBarModule, MatFormFieldControl, MatInputModule } from '@angular/material';
import { LoginService } from './login.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToasterService } from '../../services/toaster.service';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ScrollStrategyOptions } from '@angular/cdk/overlay';
import { ScrollDispatcher, ViewportRuler } from '@angular/cdk/scrolling';
import { Globals } from '../../model/Globals.module';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';

fdescribe('LoginComponent', () => {
  // declara todos os elementos que vc vai testar/que são carregados dentro do template do componente
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let btnSubmit: DebugElement;
  let inputConta: DebugElement;
  let inputSenha: DebugElement;
  let matFormField: DebugElement;
  let todasDivs: DebugElement;
  let cartao: DebugElement;
  let paragH1: DebugElement;
  let paragH2: DebugElement;
  let cabecalho: DebugElement;

  beforeEach(async(() => {
    // declara essa caralhada de coisa, no caso, tudo que vc usa no componente ===== fui na tentativa e erro mesmo
    // entrão vai acompanhando os erros que dão e vai ajustando os imports e providers
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [ 
        LoginService, 
        ToasterService, 
        MatSnackBar, 
        Overlay, 
        ScrollStrategyOptions, 
        ScrollDispatcher,
        ViewportRuler,
        Globals
      ],
      imports: [
        MatFormFieldModule,
        MatSnackBarModule,
        OverlayModule,
        FormsModule, 
        MatCardModule, 
        MatIconModule, 
        MatFormFieldModule, 
        ReactiveFormsModule, 
        MatSlideToggleModule, 
        HttpClientModule, 
        HttpClientTestingModule,
        RouterTestingModule,
        MatInputModule,
        NoopAnimationsModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    // testando elementos do componente == pode puxar por classe, tags, etc
    todasDivs = fixture.debugElement.query(By.css('div'))
    btnSubmit = fixture.debugElement.query(By.css('button[type=submit]'))
    inputConta = fixture.debugElement.query(By.css('.inputContaLogin'))
    matFormField = fixture.debugElement.query(By.css('mat-form-field'))
    inputSenha = fixture.debugElement.query(By.css('input[type=password]'))
    cartao = fixture.debugElement.query(By.css('mat-card'))
    cabecalho = fixture.debugElement.query(By.css('header'))
    paragH1 = fixture.debugElement.query(By.css('h1'))
    paragH2 = fixture.debugElement.query(By.css('h2'))

    fixture.detectChanges();
  });

  // cria um IT para cada coisa que tipo de teste que vc quer fazer
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('criar cartao', () => {
    expect(cartao).toBeTruthy();
  });

  it('criar cabeçalho', () => {
    expect(cabecalho).toBeTruthy();
    expect(paragH1).toBeTruthy();
    expect(paragH2).toBeTruthy();
  });

  it('criar form', () => {
    expect(matFormField).toBeTruthy();
    expect(inputConta).toBeTruthy();
    expect(inputSenha).toBeTruthy();
  });
});
