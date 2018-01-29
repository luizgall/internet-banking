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
import { TokenService } from '../../services/token.service';
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
  let checkLogado: DebugElement;

  beforeEach(async(() => {
    // declara essa caralhada de coisa, no caso, tudo que vc usa no componente ===== fui na tentativa e erro mesmo
    // entrão vai acompanhando os erros que dão e vai ajustando os imports e providers
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [ 
        TokenService,
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
    ///////////////////////////////////////////////////////
    // PAROU AQUI => ngOnInit
    //////////////////////////////////////////////////////
    // component.ngOnInit(); // comentado pq nao tem nada dentro de ngOnInit

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
    checkLogado = fixture.debugElement.query(By.css('mat-slide-toggle[name=logado]'))

    fixture.detectChanges();
  });

  // cria um IT para cada coisa que tipo de teste que vc quer fazer
  it('componente criado', () => {
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

  // ou pode usar propriedades declaradas no componente, por ex accountFormControl
  it('criar form: wrapper, inputConta, inputSenha, checkLogado e btnSubmit', () => {
    expect(matFormField).toBeTruthy();
    expect(component.accountFormControl).toBeTruthy();
    expect(component.passwordFormControl).toBeTruthy();
    expect(checkLogado).toBeTruthy();
    expect(btnSubmit).toBeTruthy();
  });

  // simular entrada de valores no input
  it('validação inputs: conta NULO, senha NULO', () => {
    expect(component.accountFormControl.hasError('required')).toBeTruthy()
    expect(component.passwordFormControl.hasError('required')).toBeTruthy()
  });

  it('validação inputs: conta 3 DIGITOS, senha 3 DIGITOS', () => {
    component.accountFormControl.setValue(123)
    component.passwordFormControl.setValue(123)

    expect(component.accountFormControl.hasError('pattern')).toBeFalsy()
    expect(component.passwordFormControl.hasError('pattern')).toBeFalsy()
  });

  it('validação inputs: conta STRING, senha STRING', () => {
    component.accountFormControl.setValue("abcd")
    component.passwordFormControl.setValue("abcdef")

    expect(component.accountFormControl.hasError('pattern')).toBeTruthy()
    expect(component.passwordFormControl.hasError('pattern')).toBeTruthy()
  });

  it('validação inputs: conta OK, senha OK', () => {
    component.accountFormControl.setValue(1001)
    component.passwordFormControl.setValue(123456)

    expect(component.accountFormControl.hasError('required')).toBeFalsy()
    expect(component.passwordFormControl.hasError('required')).toBeFalsy()
    expect(component.accountFormControl.hasError('pattern')).toBeFalsy()
    expect(component.passwordFormControl.hasError('pattern')).toBeFalsy()
  });



});
