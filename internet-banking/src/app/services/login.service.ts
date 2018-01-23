import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class LoginService {

  constructor(private http:HttpClient) { }

  public tryLogin(account, password){
    let url = `http://localhost:3000/api/login`;
    this.http.post(url,{account: account, password: password})
    .subscribe(
      res => 
      {console.log(res)},
      err => {
        console.log(err)
      }
    )
  }

}