import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ServiceService } from './services/service.service';
import { LoginService } from "./services/login.service";
import { ExtratoService } from "./services/extrato.service";
import { TransferenciaService } from "./services/transferencia.service";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExtratoComponent } from './components/extrato/extrato.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatToolbar, MatToolbarModule, MatGridListModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

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
	HttpClientModule,
	BrowserAnimationsModule,
	FormsModule,
	ReactiveFormsModule,

	FlexLayoutModule,
	MatButtonModule,
	MatIconModule,
	MatToolbarModule,
	MatGridListModule,
    MatInputModule
  ],
  providers: [ServiceService, AppComponent, LoginService, TransferenciaService, ExtratoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
