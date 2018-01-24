import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'

@Injectable()
export class ExtratoService {
  constructor(private http:HttpClient, private router:Router) { }

  public getExtract(account, cb, that){
    let url = `http://localhost:3000/api/extrato`;
    this.http.post(url,{account: account})
    .subscribe(
      res => 
      {
        if(res['status']){

          cb(res, that)
        } else {
        }
       
      },
      err => {
        return(err)
      }

    )
  }

}
