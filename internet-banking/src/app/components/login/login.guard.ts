import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login.service'
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service'


@Injectable()
export class LoginGuard implements CanActivate {

	constructor(
		private router: Router,
		private loginService: LoginService,
		public token:TokenService
	) { }

	canActivate( ){
		if (!this.token.token.status) {
			this.router.navigate(['/login']);				
			return false;
		} else {
			return true;
		}
	}
}
