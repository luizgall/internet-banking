import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import{ServiceService} from './services/service.service'
import{LoginService} from './services/login.service'
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private serviceService:ServiceService, private loginService:LoginService){

  }
  title = 'app';
  ngOnInit(){
    this.serviceService.doGet();
    let account=10011
    let password = 123456
    this.loginService.tryLogin(account, password);
  }

}
