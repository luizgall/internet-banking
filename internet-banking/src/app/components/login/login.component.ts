import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Globals } from '../../model/Globals.module';

// animations
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

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
		private global: Globals
	){}
	
	ngOnInit() {}
	
	onSubmit(){
		this.global.getApiKey(this.submitLogin)
	}

	submitLogin = (apiKey) =>{
		if(this.logado === undefined){
			this.logado = false
		}
		this.loginService.tryLogin(parseInt(this.data.account), this.data.password, apiKey, this.logado)
	}
	
}
