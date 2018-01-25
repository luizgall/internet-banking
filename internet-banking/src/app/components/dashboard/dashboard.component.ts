import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../../model/Globals.module'
import { Router } from '@angular/router'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	data = {
		username: "",
		balance: 0,
		account: 0,
		logs: []
	}

	displayedColumns = ['type', 'date', 'value'];
	dataSource = new MatTableDataSource<Statement>(ESTATEMENT_DATA);

	constructor(private http: HttpClient, private router:Router) { }

	ngOnInit() {
		let url = `http://localhost:3000/api/user`;
		this.http.post(url, {token: localStorage.getItem("auth-token")})
			.subscribe(
				res => {
					if(res['msg']==='token-invalido'){
						localStorage.removeItem("auth-token")
						this.router.navigate(['/login'])
					}
					this.data.username = res['username']
					this.data.balance = "R$ " + res['balance'].toFixed(2).toString().replace(".", ",")
					this.data.account = res["account"]
					this.data.logs =  res['logs'] 
				}
			)
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
