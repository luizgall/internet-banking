import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ServiceService } from './services/service.service';
import { LoginService } from "./services/login.service";


import { AppComponent } from './app.component';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { TelaLoginExtratoComponent } from './components/tela-login-extrato/tela-login-extrato.component';
import { TelaLoginTransferenciaComponent } from './components/tela-login-transferencia/tela-login-transferencia.component';


@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    TelaLoginExtratoComponent,
    TelaLoginTransferenciaComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule
  ],
  providers: [ServiceService, AppComponent, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
