import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import{LoginService} from '../../services/login.service';


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

  constructor() { }

  ngOnInit() {
  }
  usuario:any = { 
    account: '',
    password:''
  }
  
  onSubmit(form){
    let dados = this.usuario;
    let account = dados.account;
    let password = dados.password;
    console.log(dados.account);
    console.log(dados.password);
  }

}
