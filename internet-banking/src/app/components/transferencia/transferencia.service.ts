import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../../services/token.service'
@Injectable()
export class TransferenciaService {
	
	constructor(private http: HttpClient, public token:TokenService) { }
	
	public transfer(email, apiKey, token, value, dest, cb ) {
		let url = `http://localhost:3000/api/transferencia`;
		this.http.post(url, {
				value: value,
				dest: dest,
				token: this.token.token.value,
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
	