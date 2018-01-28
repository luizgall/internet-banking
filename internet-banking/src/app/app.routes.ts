import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from "./components/login/login.component";
import { ExtratoComponent } from "./components/extrato/extrato.component";
import { TransferenciaComponent } from "./components/transferencia/transferencia.component";

import { LoginGuard } from "./components/login/login.guard";
import { SessionGuard } from "./guards/session.guard";

// app routes
const appRoutes: Routes = [
	{ path: '', component: DashboardComponent, canActivate: [LoginGuard] },
	{ path: 'login', component: LoginComponent, canActivate: [SessionGuard] },
	{ path: 'extrato', component: ExtratoComponent, canActivate: [LoginGuard] },
	{ path: 'transferencia', component: TransferenciaComponent, canActivate: [LoginGuard] },
	{ path: '**', redirectTo: '' },
];

export const AppRoutes = RouterModule.forRoot(appRoutes)
