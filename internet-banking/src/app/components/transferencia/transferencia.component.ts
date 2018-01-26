import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient} from "@angular/common/http"
import { TransferenciaService} from '../../services/transferencia.service'
import { Router} from '@angular/router'
import { MatTableDataSource } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Globals } from '../../model/Globals.module';
import { ToasterService } from '../../services/toaster.service';

@Component({
	selector: 'app-transferencia',
	templateUrl: './transferencia.component.html',
	styleUrls: ['./transferencia.component.scss']
})
export class TransferenciaComponent implements OnInit {

	displayedColumns = [];
	dataSource;

	// transfer form validation
	valueFormControl = new FormControl('', [
		Validators.required,
	]);
	accountFormControl = new FormControl('', [
		Validators.required
	]);
	
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
		private router: Router,
		private global: Globals,
		private toasterService: ToasterService
	) {}
	
	ngOnInit() {
		let url = `http://localhost:3000/api/user`;
		this.http.post(url, {token: localStorage.getItem("auth-token")})
			.subscribe(
				res => {
					this.data.username = res['username']
					this.data.balance = res['balance'].toFixed(2).toString().replace(".", ",")
					this.data.account = res["account"]
					this.data.logs =  res['logs'] 
				}
			)
	}
	
	onSubmit(){
		this.global.getApiKey(this.submitTransferencia)
	}
	
	submitTransferencia  = (apiKey) =>{
		this.transferenciaService.transfer(
			apiKey, localStorage.getItem("auth-token"), parseFloat(this.value.replace(",", ".")), this.toAccount, this.afterSubmit
		);
	}
	
	afterSubmit = (res) => {
		this.toasterService.showToaster(res.msg, 'alert-success')
		if(res.msg == 'Transação concluída!'){
			this.router.navigate(['/'])
		}
		
	}
}
