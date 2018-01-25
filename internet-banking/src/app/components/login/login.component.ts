import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Globals } from '../../model/Globals.module';

import { moveInDown } from '../../router.animations';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	animations: [moveInDown()]
})
export class LoginComponent implements OnInit {
	
	// login form validation
	accountFormControl = new FormControl('', [
		Validators.required,
		Validators.email,
	]);
	passwordFormControl = new FormControl('', [
		Validators.required
	]);

	titulo = "Luiz";
	data = {
		account: "", 
		password: ""
	}
	
	constructor(private loginService: LoginService, private global:Globals) {}
	
	ngOnInit() {
		
	}
	
	onSubmit(){
		this.global.getApiKey(this.submitLogin)
	}

	submitLogin = (apiKey) =>{
		this.loginService.tryLogin(parseInt(this.data.account), this.data.password, apiKey)
	}
	
}
