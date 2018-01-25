import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { ServiceService } from './services/service.service';
import { LoginService } from "./services/login.service";
import { ExtratoService } from "./services/extrato.service";
import { TransferenciaService } from "./services/transferencia.service";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginGuard } from './guards/login.guard';
import { SessionGuard } from './guards/sessionguard';
import { ChecarloginService} from './services/checarlogin.service'

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
	MatListModule
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
		MatListModule
	],
	
	providers: [SessionGuard, ChecarloginService, ServiceService, AppComponent, LoginService, TransferenciaService, ExtratoService, LoginGuard],
	bootstrap: [AppComponent]
})
export class AppModule { }
