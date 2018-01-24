import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TransferenciaService {

  constructor(private http:HttpClient) { }

  public transfer(account, password, value, dest ){
    let url = `http://localhost:3000/api/transferencia`;
    this.http.post(url,
      {account: account, 
        password: password,
        value: value,
        dest: dest,
        token: localStorage.getItem('auth-token')
      })
    .subscribe(
      res => 
      {console.log(res)},
      err => {
        console.log(err)
      }
    )
  }
}
