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
	
	displayedColumns = ['type', 'date', 'value'];
	dataSource = new MatTableDataSource<Statement>(ESTATEMENT_DATA);
	
	data = {
		username:"",
		balance:0,
		account: 0,
		logs: []
	}
	
	toAccount
	value
	constructor(private http:HttpClient,
	private transferenciaService: TransferenciaService,
	private router:Router) { }
	
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
		this.transferenciaService.transfer(localStorage.getItem("auth-token"), parseInt(this.value), this.toAccount, this.afterSubmit);
	}
	
	afterSubmit = (res) => {
		alert(res.msg)
		this.router.navigate(['/'])
	}
}

export interface Statement {
	type: string;
	date: string;
	value: number;
}

const ESTATEMENT_DATA: Statement[] = [
	{ type: 'arrow_forward', date: '11/01/2018', value: 1.079, },
	{ type: 'arrow_back', date: '07/12/2017', value: 4.026, },
	{ type: 'arrow_forward', date: '10/12/2017', value: 6.041 },
];
	