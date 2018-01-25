import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { ToasterService } from './toaster.service';

@Injectable()
export class LoginService {

	constructor(
		private http: HttpClient, 
		private router: Router,
		private toasterService: ToasterService
	) {}
	
	public tryLogin(account, password, apiKey){
		let url = `http://localhost:3000/api/login`;
		this.http.post(url, {account: account, password: password, apiKey: apiKey})
			.subscribe(
				res => {
					if(res['status']){
						this.router.navigateByUrl("/")
						localStorage.setItem("auth-token", res['token'])
						this.toasterService.showToaster('Login efetuado com sucesso', 'alert-success')
					} else {
						this.toasterService.showToaster('Dados incorretos, revise os campos e tente novamente', 'alert-error')
					}
				},
				err => {
					return(err)
				}
			)
	}
}
