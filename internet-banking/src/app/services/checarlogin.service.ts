import { Injectable } from '@angular/core';
import { TokenService } from './token.service'

@Injectable()
export class ChecarloginService {
	
	constructor(
		public token:TokenService
	) { }
	
	public isLogin(){
		if(this.token.token.status){	
			return true
		} else{
			return false
		}
	}
}
