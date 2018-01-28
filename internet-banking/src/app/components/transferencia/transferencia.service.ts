import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TransferenciaService {
	
	constructor(private http: HttpClient) { }
	
	public transfer(email, apiKey, token, value, dest, cb ) {
		let url = `https://ng-bankline.herokuapp.com/api/transferencia`;
		this.http.post(url, {
				value: value,
				dest: dest,
				token: localStorage.getItem('auth-token'),
				apiKey: apiKey,
				email: email
			})
			.subscribe(
				res => {cb (res)},
				err => {
					console.log(err)
				}
			)
	}
}
	