import { Component, OnInit } from '@angular/core';
import { ExtratoService } from './extrato.service';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { moveInLeft } from '../../router.animations';
import { TokenService } from '../../services/token.service'
import { UserDataService } from '../../services/user-data.service'

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
		public token:TokenService,
		public userData: UserDataService
	) {}
	
	logs = []
	userAccount: Number


	atualizar = () => {
		if(EXTRATO_DATA.length === 0){
			for (let log of this.logs) {
				EXTRATO_DATA.push(
					{ type: log.type, name: log.destName, account: log.destAccount, date: log.date, value: log.value }
				)
			}
		}

	}
	
	ngOnInit() {
		this.logs = this.userData.logs
		this.atualizar()
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
