import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http"
import { Router } from '@angular/router'
import { MatTableDataSource } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ToasterService } from '../../services/toaster.service';
import { moveInLeft } from '../../router.animations';
import { TransferenciaService } from './transferencia.service';
import { TokenService } from '../../services/token.service'
import { UserDataService } from '../../services/user-data.service'

@Component({
	selector: 'app-transferencia',
	templateUrl: './transferencia.component.html',
	styleUrls: ['./transferencia.component.scss'],
	animations: [moveInLeft()],
	host: { '[@moveInLeft]': '' }
})
export class TransferenciaComponent implements OnInit {

	data = {}
	logs = []
	
	pageTitle: string;
	displayedColumns = [];
	dataSource;

	// transfer form validation
	valueFormControl = new FormControl('', [
		Validators.required,
	]);
	accountFormControl = new FormControl('', [
		Validators.required
	]);
	
	
	toAccount
	value
	email
	password
	constructor(
		private http: HttpClient,
		private transferenciaService: TransferenciaService,
		private router: Router,
		private userData: UserDataService,
		private toasterService: ToasterService,
		public token: TokenService
	) {}
	
	ngOnInit() {
		this.pageTitle = 'Transferência'

		this.data = {
			username: this.userData.name,
			balance: this.userData.balance,
			account: this.userData.account,
			logs: this.userData.logs
		}
		this.logs = this.data['logs']
	}
	
	onSubmit(){
		if (this.email == undefined) {
			this.email = false
		}
		this.transferenciaService.transfer(

		this.password, this.email, this.userData.apiKey, this.token.token.value, parseFloat(this.value.replace(",", ".")), this.toAccount, this.afterSubmit
		);
	}
	
	afterSubmit = (res) => {
		if(res.msg == 'Transação concluída!'){

			this.userData.balance = res['balance']
			this.userData.logs = res['logs']
			let mensagem = `
			${res.msg}


			R$ ${parseFloat(this.value.replace(",", ".")).toFixed(2)} para a conta ${this.toAccount}


			`
			this.toasterService.showToaster(mensagem, 'alert-success')
			
			this.router.navigate(['/'])
		} else {
			this.toasterService.showToaster(res.msg, 'alert-warning')
		}
		
	}
}
