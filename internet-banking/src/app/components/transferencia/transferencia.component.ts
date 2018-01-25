import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http"
import { TransferenciaService} from '../../services/transferencia.service'
import { Router} from '@angular/router'
import { MatTableDataSource } from '@angular/material';

@Component({
	selector: 'app-transferencia',
	templateUrl: './transferencia.component.html',
	styleUrls: ['./transferencia.component.scss']
})
export class TransferenciaComponent implements OnInit {

	displayedColumns = [];
	dataSource;
	
	data = {
		username: "",
		balance: 0,
		account: 0,
		logs: []
	}
	
	toAccount
	value

	constructor(
		private http: HttpClient,
		private transferenciaService: TransferenciaService,
		private router: Router
	) {}
	
	ngOnInit() {
		let url = `http://localhost:3000/api/user`;
		this.http.post(url, {token: localStorage.getItem("auth-token")})
			.subscribe(
				res => {
					this.data.username = res['username']
					this.data.balance = parseInt(res['balance'])
					this.data.account = res["account"]
					this.data.logs =  res['logs'] 
				}
			)
	}
	
	onSubmit(){
		this.transferenciaService.transfer(
			localStorage.getItem("auth-token"), parseInt(this.value), this.toAccount, this.afterSubmit
		);
	}
	
	afterSubmit = (res) => {
		alert(res.msg)
		this.router.navigate(['/'])
	}
}
