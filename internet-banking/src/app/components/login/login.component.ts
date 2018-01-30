import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { LoginService } from './login.service';
import {UserDataService} from '../../services/user-data.service'
// animations
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	animations: [
		trigger('fallIn', [
			transition('* => *', [
				// animation enter from top
				query('.enter-from-top', style({ opacity: 0, transform: 'translateY(-25px)' })),
				query('.enter-from-top', stagger('400ms', [
					animate('800ms 0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
				])),
			])
		])
	]
})
export class LoginComponent implements OnInit {
	
	// login form validation
	accountFormControl = new FormControl('', [
		Validators.required,
	]);
	passwordFormControl = new FormControl('', [
		Validators.required
	]);

	titulo = "Luiz";
	data = {
		account: "", 
		password: ""
	}
	
	logado
	constructor(
		private loginService: LoginService, 
		public userData: UserDataService
	){}
	
	ngOnInit() {
		this.userData.getApiKey();

	}
	
	onSubmit(){
		if (this.logado === undefined) {
			this.logado = false
		}
		this.loginService.tryLogin(parseInt(this.data.account), this.data.password, this.userData.apiKey, this.logado)
	}
	
}
