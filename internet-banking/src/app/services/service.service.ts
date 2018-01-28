import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceService {
	
	constructor(private http: HttpClient) {}
	
	public doGet() {
		let url = `https://ng-bankline.herokuapp.com/api/users`;
		this.http.get(url)
			.subscribe(res => {return res});
	}
}
