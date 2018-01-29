import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../../model/Globals.module'
import { Router } from '@angular/router'
import { ExtratoService } from '../extrato/extrato.service';
import { ToasterService } from '../../services/toaster.service';
import { moveInLeft } from '../../router.animations';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	animations: [moveInLeft()],
	host: { '[@moveInLeft]': '' }
})
export class DashboardComponent implements OnInit {
	
	data = {
		username: "",
		balance: "0",
		account: 0,
		logs: []
	}
	
	constructor(
		private http: HttpClient, 
		private router: Router,
		private global: Globals,
		private extratoService: ExtratoService,
		private toasterService: ToasterService
	) {}
	
	ngOnInit() {
		let url = `https://ng-bankline.herokuapp.com/api/user`;
		this.http.post(url, {token: localStorage.getItem("auth-token")})
		.subscribe(
			res => {
				if(res['msg']==='token-invalido'){
					localStorage.removeItem("auth-token")
					this.router.navigate(['/login'])
					this.toasterService.showToaster('Sua sessão expirou')
				}
				this.data.username = res['username']
				this.data.balance = res['balance']
				this.data.account = res["account"]
				this.data.logs = res['logs'] 
			}
		)
		
		this.global.getApiKey(this.getExtract)
	}
	
	logs = []
	that = this
	userAccount: Number
	atualizar = (res) => {
		this.logs = res.logs.reverse()
	}
	
	getExtract = (apiKey) => {
		let url = `http://localhost:3000/api/user`;
		this.http.post(url, { apiKey: apiKey, token: localStorage.getItem("auth-token") })
			.subscribe(res => {
				this.extratoService.getExtract(apiKey, res['account'], this.atualizar)
			}
		)
		
	}

}
