import { Component, OnInit } from '@angular/core';
import { ExtratoService } from '../../services/extrato.service';
import { Globals } from '../../model/Globals.module';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { moveIn, fallIn } from '../../router.animations';

@Component({
	selector: 'app-extrato',
	templateUrl: './extrato.component.html',
	styleUrls: ['./extrato.component.scss'],
	animations: [moveIn(), fallIn()],
	host: { '[@moveIn]': '' }
})
export class ExtratoComponent implements OnInit {
	
	constructor(
		private extratoService: ExtratoService, 
		private http: HttpClient, 
		private global: Globals
	) {}
	
	logs = []
	userAccount: Number
	atualizar = (res) => {
		this.logs = res.logs.reverse()
	}
	
	ngOnInit() {
		this.global.getApiKey(this.getExtract)
	}

	getExtract = (apiKey) =>{
		let url = `http://localhost:3000/api/user`;
		this.http.post(url, { apiKey: apiKey, token: localStorage.getItem("auth-token") })
			.subscribe( res => {
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
const EXTRATO_DATA: Extrato[] = [
	{ type: true, name: 'Luiz Gall', account: 1001, date: '11/01/2018', value: 200 },
	{ type: false, name: 'Bruno Sesso', account: 1007, date: '13/01/2018', value: 140 },
	{ type: true, name: 'Murilo Portescheller', account: 1005, date: '08/01/2018', value: 120 },
];
