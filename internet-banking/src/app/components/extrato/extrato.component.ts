import { Component, OnInit } from '@angular/core';
import { ExtratoService } from './extrato.service';
import { Globals } from '../../model/Globals.module';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { moveInLeft } from '../../router.animations';
import { TokenService } from '../../services/token.service'

@Component({
	selector: 'app-extrato',
	templateUrl: './extrato.component.html',
	styleUrls: ['./extrato.component.scss'],
	animations: [moveInLeft()],
	host: { '[@moveInLeft]': '' }
})
export class ExtratoComponent implements OnInit {
	
	pageTitle: string;

	constructor(
		private extratoService: ExtratoService, 
		private http: HttpClient, 
		private global: Globals,
		public token:TokenService
	) {}
	
	logs = []
	
	userAccount: Number
	atualizar = (res) => {
		console.log(res)
		this.logs = res.logs.reverse()
		if(EXTRATO_DATA.length === 0){
			for (let log of this.logs) {
				EXTRATO_DATA.push(
					{ type: log.type, name: log.destName, account: log.destAccount, date: log.date, value: log.value }
				)
			}
		}

	}
	
	ngOnInit() {
		this.global.getApiKey(this.getExtract)
		this.pageTitle = 'Extrato'
	}

	getExtract = (apiKey) => {
		let url = `http://localhost:3000/api/user`;
		this.http.post(url, { apiKey: apiKey, token: this.token.token.value })
			.subscribe(res => {
				this.extratoService.getExtract(apiKey, res['account'], this.atualizar)
			}
			)

	}

	// material dynamic table
	displayedColumns = ['type', 'name', 'account', 'date', 'value'];
	dataSource = new MatTableDataSource(EXTRATO_DATA);

	applyFilter(filterValue: string) {
		filterValue = filterValue.trim(); // Remove whitespace
		filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
		this.dataSource.filter = filterValue;
	}

	/**
	 * Paginator, pode ser implementado futuramente 
	 */
	// pagination
	// @ViewChild(MatPaginator) paginator: MatPaginator;
	/**
	 * Set the paginator after the view init since this component will
	 * be able to query its view for the initialized paginator.
	 */
	// ngAfterViewInit() {
	// 	this.dataSource.paginator = this.paginator;
	// }
	
}

export interface Extrato {
	type: boolean;
	name: string;
	account: number;
	date: string;
	value: number;
}

// Simulação de dados no caso tem que criar um array nesse formato
// usando os logs
let EXTRATO_DATA: Extrato[] = [
];
