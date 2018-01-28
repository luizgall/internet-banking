import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from './model/Globals.module'
import { ChecarloginService } from './services/checarlogin.service'
import { ServiceService } from './services/service.service'
import { LoginService } from './components/login/login.service'
import { TransferenciaService } from './components/transferencia/transferencia.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	
	constructor(
		private serviceService: ServiceService, 
		private loginService: LoginService, 

		private transferenciaService: TransferenciaService,
		private checarloginService: ChecarloginService,
		private global: Globals
	) {}
	
	ngOnInit(){
		this.serviceService.doGet();
		let account = 1001
		let password = 123456
		let value = 1
		let dest = 1004
		
		this.serviceService.doGet();
	}
	
}

