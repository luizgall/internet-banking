import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgModel } from '@angular/forms'
import { LoginService } from '../../services/login.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],

	// animations
	animations: [
		trigger('onloadAnimation', [
			transition('* => *', [

				// animation enter from bottom
				query('.enter-from-bottom', style({ opacity: 0, transform: 'translateY(10px)' })),
				query('.enter-from-bottom', stagger('100ms', [
					animate('1200ms 0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
				])),

				// animation enter from top
				// query('.enter-from-top', style({ opacity: 0, transform: 'translateY(-20px)' })),
				// query('.enter-from-top', stagger('100ms', [
				// 	animate('1000ms 0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
				// ])),
				
			])
		])
	]

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
	
	constructor(private loginService: LoginService) {}
	
	ngOnInit() {
		
	}
	
	onSubmit(){
		console.log("submiting", this.data)
		this.loginService.tryLogin(parseInt(this.data.account), parseInt(this.data.password))
	}
	
}
