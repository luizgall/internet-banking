import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr)

import { RouterModule, Routes } from '@angular/router'
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

// angular material imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
	MatButtonModule, 
	MatIconModule, 
	MatToolbarModule, 
	MatGridListModule, 
	MatInputModule, 
	MatCardModule, 
	MatSlideToggleModule, 
	MatMenuModule, 
	MatTableModule,
	MatDividerModule,
	MatListModule,
	MatCheckboxModule,
	MatSnackBarModule,
	MatPaginatorModule
} from '@angular/material';

// grid system
import { FlexLayoutModule } from '@angular/flex-layout';

// custom pipes
import { IniciaisPipe } from './pipes/iniciais.pipe';
import { NavbarMobileComponent } from './components/navbar-mobile/navbar-mobile.component';
import { NumberFormatPipe } from './pipes/numberformat.pipe';

// app routes
const appRoutes: Routes = [
	{ path: '', component: DashboardComponent, canActivate: [LoginGuard] },
	{ path: 'login', component: LoginComponent, canActivate:[SessionGuard] },
	{ path: 'extrato', component: ExtratoComponent, canActivate: [LoginGuard] },
	{ path: 'transferencia', component: TransferenciaComponent, canActivate: [LoginGuard] },
	{ path: '**', redirectTo: '' },
];

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		NavbarComponent,		
		DashboardComponent,
		ExtratoComponent,
		TransferenciaComponent,
		PageNotFoundComponent,
		
		// pipes
		IniciaisPipe,
		NumberFormatPipe,
		
		NavbarMobileComponent
	],
	imports: [
		// modules
		BrowserModule, 
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		
		// rotas de navegação do app
		RouterModule.forRoot(appRoutes),
		
		// layout modules
		BrowserAnimationsModule,	
		FlexLayoutModule,
		MatButtonModule,
		MatIconModule,
		MatToolbarModule,
		MatGridListModule,
		MatInputModule,
		MatCardModule,
		MatSlideToggleModule,
		MatMenuModule,
		MatTableModule,
		MatDividerModule,
		MatListModule,
		MatCheckboxModule,
		MatSnackBarModule,
		MatPaginatorModule
	],
	
	providers: [
		{ provide: LOCALE_ID, useValue: 'pt-PT' },
		Globals, 		
		LoginGuard, 		
		SessionGuard,
		ChecarloginService, 
		ServiceService, 
		AppComponent, 
		LoginService, 
		TransferenciaService, 
		ExtratoService, 
		ToasterService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
