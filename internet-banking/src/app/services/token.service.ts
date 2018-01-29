import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

	public token = {
		value:"",
		status:false
	}
  constructor() { }

}
