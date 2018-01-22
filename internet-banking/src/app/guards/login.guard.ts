// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { LoginService } from '../services/login.service';

// @Injectable()
// export class LoginGuard implements CanActivate {

// 	isLoggedIn: boolean;

// 	constructor(
// 		private router: Router,
// 		private loginService: LoginService
// 	) { }

// 	canActivate(): boolean {
// 		if (this.loginService.tryLogin(1002, 123450)) {
// 			this.router.navigate(['/login']);				
// 			return false;
// 		} else {
// 			return true;
// 		}
// 	}
// }
