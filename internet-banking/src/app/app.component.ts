import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import{ ServiceService } from './services/service.service'
import{ LoginService } from './services/login.service'
import { TransferenciaService } from './services/transferencia.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor(
		private serviceService: ServiceService, 
		private loginService: LoginService, 
		private transferenciaService: TransferenciaService
	) {}

  title = 'app';



  ngOnInit(){

    this.serviceService.doGet();
    let account = 1001
    let password = 123456
    let value = 1
    let dest = 1004

    this.transferenciaService.transfer(account, password, value, dest);
    this.serviceService.doGet();
  }

}

