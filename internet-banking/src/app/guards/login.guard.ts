import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../services/login.service'
import { Router } from '@angular/router';


@Injectable()
export class LoginGuard implements CanActivate {

	constructor(
		private router: Router,
		private loginService: LoginService
	) { }

	canActivate( ){
		if (!localStorage.getItem("auth-token")) {
			this.router.navigate(['/login']);				
			return false;
		} else {
			return true;
		}
	}
}
