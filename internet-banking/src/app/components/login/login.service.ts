import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { ToasterService } from '../../services/toaster.service';
import {TokenService} from '../../services/token.service'
 
@Injectable()
export class LoginService {

	constructor(
		private http: HttpClient, 
		private router: Router,
		private toasterService: ToasterService,
		public token:TokenService
	) {}
	
	public tryLogin(account, password, apiKey, logado){

		console.log(this.token.token.status)
		let url = `http://localhost:3000/api/login`;
		this.http.post(url, {
				account: account, 
				password: password, 
				apiKey: apiKey, 
				logado: logado
			})
			.subscribe(
				res => {
					if(res['status'] == true){
						this.router.navigateByUrl("/")
						this.token.token.status = true
						this.token.token.value = res['token']
					} else {
						this.toasterService.showToaster('Dados incorretos, revise os campos e tente novamente', 'alert-warning')
						console.log(res['status'])						
					}
				},
				err => {
					return(err)
				}
			)
	}
}
