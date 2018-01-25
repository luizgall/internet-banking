import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Globals } from './model/Globals.module';

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
	MatSnackBarModule
} from '@angular/material';

// tentar criar o grid usando o GridList do material, se não conseguir pode usar o modulo abaixo
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './components/navbar/navbar.component';

// custom pipes
import { IniciaisPipe } from './pipes/iniciais.pipe';

// app routes
const appRoutes: Routes = [
	{ path: '', component: DashboardComponent, canActivate: [LoginGuard] },
	{ path: 'login', component: LoginComponent, canActivate:[SessionGuard] },
	{ path: 'extrato', component: ExtratoComponent, canActivate: [LoginGuard] },
	{ path: 'transferencia', component: TransferenciaComponent, canActivate: [LoginGuard] },
	{ path: '**', component: PageNotFoundComponent },
];

@NgModule({

	declarations: [
		AppComponent,
		LoginComponent,
		DashboardComponent,
		ExtratoComponent,
		TransferenciaComponent,
		PageNotFoundComponent,
		NavbarComponent,
		
		// pipes
		IniciaisPipe
	],
	imports: [
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
		MatSnackBarModule
	],
	
	providers: [
		SessionGuard, ChecarloginService, ServiceService, AppComponent, LoginService, TransferenciaService, ExtratoService, LoginGuard, Globals, ToasterService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
