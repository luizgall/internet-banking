import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { ExtratoService } from '../extrato/extrato.service';
import { ToasterService } from '../../services/toaster.service';
import { moveInLeft } from '../../router.animations';
import { TokenService } from '../../services/token.service'
import { UserDataService } from "../../services/user-data.service";

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	animations: [moveInLeft()],
	host: { '[@moveInLeft]': '' }
})
export class DashboardComponent implements OnInit {
	
	
	data ={}
	logs = []
	
	constructor(
		private http: HttpClient, 
		private router: Router,
		private extratoService: ExtratoService,
		private toasterService: ToasterService,
		public token:TokenService,
		public userData: UserDataService
	) {}
	
	ngOnInit() {
		this.data = {
			username: this.userData.name,
			balance: this.userData.balance,
			account: this.userData.account,
			logs: this.userData.logs
		}
		this.logs = this.data['logs']
	}
	


}
