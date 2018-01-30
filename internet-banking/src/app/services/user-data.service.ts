import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class UserDataService {


	public account:Number
	public balance:Number
	public logs = []
	public name:String
	public apiKey

	constructor(private http: HttpClient) {
	 }

	getApiKey() {
		this.http.get('../../assets/apiKey.json')
			.subscribe(
				data => {
					this.apiKey =  data['key']
				}
			)
	}
}
