import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ServiceService } from './services/service.service';
import { LoginService } from "./services/login.service";
import { ExtratoService } from "./services/extrato.service";
import { TransferenciaService } from "./services/transferencia.service";


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExtratoComponent } from './components/extrato/extrato.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ExtratoComponent,
    TransferenciaComponent,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule
  ],
  providers: [ServiceService, AppComponent, LoginService, TransferenciaService, ExtratoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
