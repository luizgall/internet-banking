import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {LoginService} from '../services/login.service'
import { Router } from '@angular/router';


 @Injectable()
 export class SessionGuard implements CanActivate {

 	isLoggedIn: boolean;

 	constructor(
 		private router: Router,
 		private loginService: LoginService,
 	) { }

 	canActivate( ){
 		if (localStorage.getItem("logado")) {
 			this.router.navigate(['/']);				
 			return false;
 		} else {
 			return true;
 		}
 	}
 }
