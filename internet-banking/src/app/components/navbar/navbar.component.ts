import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { Globals } from '../../model/Globals.module';
import { TokenService } from '../../services/token.service'

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
	
	pageTitle: string;

	data = {
		username: String,
		balance: Number,
		account: Number,
		logs: Array
	}
	constructor(
		private router: Router,
		private http: HttpClient,
		private route: ActivatedRoute,
		public token: TokenService
	) {
	}
		
	ngOnInit() {
		let url = `http://localhost:3000/api/user`;
		this.http.post(url, {token: this.token.token.value})
		.subscribe(
			res => {
				this.data.username = res['username']
				this.data.balance = res['balance']
				this.data.account = res["account"]
				this.data.logs =  res['logs'] 
			}
		)
	}
		
	desconectar(){
		this.token.token.value = ""
		this.token.token.status = false
		
		this.router.navigate(['/login'])
	}
	
}
	