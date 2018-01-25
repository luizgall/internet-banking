import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Globals} from './model/Globals.module'
import {ChecarloginService} from './services/checarlogin.service'
import{ ServiceService } from './services/service.service'
import{ LoginService } from './services/login.service'
import { TransferenciaService } from './services/transferencia.service';
import {ExtratoService} from './services/extrato.service';

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
    private extratoService: ExtratoService,
	private checarloginService: ChecarloginService,
		private global:Globals
	) {}

  title = 'app';



  ngOnInit(){

    this.serviceService.doGet();
    let account = 1001
    let password = 123456
    let value = 1
    let dest = 1004
	console.log(this.global.getApiKey(this.logue))
    this.serviceService.doGet();
  }

  logue(data){
	  console.log(data)
  }
}

