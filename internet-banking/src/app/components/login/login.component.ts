import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {NgModel} from '@angular/forms'
import {LoginService} from "../../services/login.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	accountFormControl = new FormControl('', [
		Validators.required,
		Validators.email,
	]);
	passwordFormControl = new FormControl('', [
		Validators.required
	]);
	titulo = "Luiz"
	data={account:"", password:""}
  constructor(private loginService:LoginService) {
	 }

  ngOnInit() {

	}
	
	onSubmit(){
		this.loginService.tryLogin(parseInt(this.data.account), this.data.password)
	}

}
