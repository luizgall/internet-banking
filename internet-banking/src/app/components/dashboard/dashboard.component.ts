import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	currentBalance: number = 8.200;

	displayedColumns = ['type', 'date', 'value'];
	dataSource = new MatTableDataSource<Statement>(ESTATEMENT_DATA);

	constructor() { }

	ngOnInit() {
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
