import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { ToasterService } from '../../services/toaster.service';

@Injectable()
export class LoginService {

	constructor(
		private http: HttpClient, 
		private router: Router,
		private toasterService: ToasterService
	) {}
	
	public tryLogin(account, password, apiKey, logado){
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
						localStorage.setItem("auth-token", res['token'])
						console.log(res['status'])
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
