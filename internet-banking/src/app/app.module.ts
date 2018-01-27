import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { AppMaterialModule } from './material.module';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutes } from './app.routes';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Globals } from './model/Globals.module';

// guards
import { LoginGuard } from './guards/login.guard';
import { SessionGuard } from './guards/session.guard';

import { ServiceService } from './services/service.service';
import { LoginService } from "./services/login.service";
import { ExtratoService } from "./services/extrato.service";
import { TransferenciaService } from "./services/transferencia.service";
import { ChecarloginService} from './services/checarlogin.service';
import { ToasterService } from './services/toaster.service';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExtratoComponent } from './components/extrato/extrato.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarMobileComponent } from './components/navbar-mobile/navbar-mobile.component';

// custom pipes
import { IniciaisPipe } from './pipes/iniciais.pipe';
import { NumberFormatPipe } from './pipes/numberformat.pipe';

// register locale data
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr)

@NgModule({
	declarations: [
		AppComponent, LoginComponent, NavbarComponent, DashboardComponent, ExtratoComponent, TransferenciaComponent, NavbarMobileComponent,
		
		// pipes
		IniciaisPipe, NumberFormatPipe
	],
	imports: [
		BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule, AppMaterialModule, AppRoutes		
	],
	providers: [
		Globals, 
		LoginGuard, 
		SessionGuard, 
		ChecarloginService, 
		ServiceService, 
		AppComponent, 
		LoginService, 
		TransferenciaService, 
		ExtratoService, 
		ToasterService, 
		{ provide: LOCALE_ID, useValue: 'pt-PT' }		
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
