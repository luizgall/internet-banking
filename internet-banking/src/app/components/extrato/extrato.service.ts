import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ExtratoService {
	
	constructor(
		private http: HttpClient
	) {}
	
	public getExtract(apiKey, account, cb) {
		let url = `https://ng-bankline.herokuapp.com/api/extrato`;
		this.http.post(url, { account: account, token: localStorage.getItem('auth-token'), apiKey: apiKey})
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
