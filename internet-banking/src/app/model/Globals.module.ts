import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable()
export class Globals implements OnInit {
	constructor(private http:HttpClient){}
	apiKey
	ngOnInit(){
		
	}

	getApiKey(cb){
		this.http.get('../../assets/apiKey.json')
			.subscribe(
			data => {
				cb(data['key'])
			}
			)
	}
}
