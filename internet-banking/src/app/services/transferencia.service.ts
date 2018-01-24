import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TransferenciaService {

  constructor(private http:HttpClient) { }

  public transfer(token, value, dest, cb ){
    let url = `http://localhost:3000/api/transferencia`;
    this.http.post(url,
      {
        value: value,
        dest: dest,
        token: localStorage.getItem('auth-token')
      })
    .subscribe(
      res => 
      {cb(res)},
      err => {
        console.log(err)
      }
    )
  }
}
