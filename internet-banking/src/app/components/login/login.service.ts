import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { ToasterService } from '../../services/toaster.service';
import {TokenService} from '../../services/token.service'
import {  UserDataService } from "../../services/user-data.service";
 
@Injectable()
export class LoginService {

	constructor(
		private http: HttpClient, 
		private router: Router,
		private toasterService: ToasterService,
		public token:TokenService, 
		public userData: UserDataService
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
						this.token.token.status = true
						this.token.token.value = res['token']
						this.userData.account = res['account']
						this.userData.balance = res['balance']
						this.userData.logs = res['logs']
						this.userData.name = res['name']
						
						this.router.navigateByUrl("/")

					} else {
						this.toasterService.showToaster('Dados incorretos, revise os campos e tente novamente', 'alert-warning')					
					}
				},
				err => {
					return(err)
				}
			)
	}
}
