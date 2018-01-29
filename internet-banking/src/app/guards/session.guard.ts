import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../components/login/login.service'
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service'


 @Injectable()
 export class SessionGuard implements CanActivate {

 	isLoggedIn: boolean;

 	constructor(
 		private router: Router,
		 private loginService: LoginService,
		 private token:TokenService
 	) { }

 	canActivate( ){
 		if (this.token.token.status) {
 			this.router.navigate(['/']);				
 			return false;
 		} else {
 			return true;
 		}
 	}
 }
