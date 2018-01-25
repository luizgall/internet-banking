import { Component, OnInit } from '@angular/core';
import { ExtratoService } from '../../services/extrato.service'

@Component({
	selector: 'app-extrato',
	templateUrl: './extrato.component.html',
	styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
	
	constructor(private extratoService: ExtratoService) { }
	
	logs = []
	that = this
	atualizar = (res) => {
		this.logs = res.logs.reverse()
		console.log(this.logs)
	}
	
	ngOnInit() {
		this.extratoService.getExtract(1001, this.atualizar)
	}
	
}
