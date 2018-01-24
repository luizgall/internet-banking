import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'

@Injectable()
export class LoginService {

  constructor(private http:HttpClient, private router:Router) { }
  public tryLogin(account, password){
    let url = `http://localhost:3000/api/login`;
    this.http.post(url,{account: account, password: password})
    .subscribe(
      res => 
      {
        if(res['status']){
          this.router.navigateByUrl("/")
          localStorage.setItem("auth-token", res['token'])
        } else {
          alert("Senha ou usuário incorreto")
        }
      
      },
      err => {
        return(err)
      }

    )
  }

}
