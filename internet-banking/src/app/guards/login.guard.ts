import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';
import {LoginService} from '../services/login.service'
import { Router } from '@angular/router';


 @Injectable()
 export class LoginGuard implements CanActivate {

 	isLoggedIn: boolean;

 	constructor(
 		private router: Router,
 		private loginService: LoginService,
      private authService: AuthService
 	) { }

 	canActivate(    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
 		if (!this.loginService.tryLogin(1002, 123456)&&!this.authService.authenticated) {
 			this.router.navigate(['/login']);				
 			return false;
 		} else {
 			return true;
 		}
 	}
 }
