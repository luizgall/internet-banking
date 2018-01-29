import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../../services/token.service'

@Injectable()
export class ExtratoService {
	
	constructor(
		private http: HttpClient,
		public token: TokenService
	) {}
	
	public getExtract(apiKey, account, cb) {
		let url = `http://localhost:3000/api/extrato`;
		this.http.post(url, { account: account, token: this.token.token.value, apiKey: apiKey})
			.subscribe(
				res => {
					if(res['status']) {
						cb(res)
					}	
				},
				err => {
					return(err)
				}
			)
	}
}
