import { Component, OnInit } from '@angular/core';
import { ExtratoService } from '../../services/extrato.service'
import { Globals } from '../../model/Globals.module';
import { HttpClient } from '@angular/common/http'

@Component({
	selector: 'app-extrato',
	templateUrl: './extrato.component.html',
	styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
	
	constructor(private extratoService: ExtratoService, private http:HttpClient, private global:Globals) { }
	
	logs = []
	that = this
	userAccount:Number
	atualizar = (res) => {
		this.logs = res.logs.reverse()
	}
	
	ngOnInit() {
		this.global.getApiKey(this.getExtract)

	}

	getExtract = (apiKey) =>{
		let url = `http://localhost:3000/api/user`;
		this.http.post(url, { apiKey:apiKey, token: localStorage.getItem("auth-token") })
			.subscribe(
			res => {
				this.extratoService.getExtract(apiKey, res['account'], this.atualizar)
			}
			)

	}
	
}
