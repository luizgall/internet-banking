import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../../services/token.service'
import { UserDataService } from '../../services/user-data.service'

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
	
	pageTitle: string;

	data = {
		username: this.userData.name,
		balance: this.userData.balance,
		account: this.userData.account,
		logs: this.userData.logs
	}
	constructor(
		private router: Router,
		private http: HttpClient,
		private route: ActivatedRoute,
		public token: TokenService,
		public userData: UserDataService
	) {}
		
	ngOnInit() {
	}
		
	desconectar(){
		this.token.token.value = ""
		this.token.token.status = false
		
		this.router.navigate(['/login'])
	}
	
}
	