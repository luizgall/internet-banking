import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

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
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// futuramente isso bloqueará o acesso às páginas internas caso não esteja logado
// import { LoginGuard } from './guards/login.guard';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatToolbarModule, MatGridListModule, MatInputModule, MatCardModule, MatSlideToggleModule } from '@angular/material';

// tentar criar o grid usando o GridList do material, se não conseguir pode usar o modulo abaixo
import { FlexLayoutModule } from '@angular/flex-layout';

// app routes
const appRoutes: Routes = [
	{ path: '', component: DashboardComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'extrato', component: ExtratoComponent },
	{ path: 'transferencia', component: TransferenciaComponent },
	{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ExtratoComponent,
	TransferenciaComponent,
	PageNotFoundComponent
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
	MatSlideToggleModule
  ],
  providers: [ServiceService, AppComponent, LoginService, TransferenciaService, ExtratoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
