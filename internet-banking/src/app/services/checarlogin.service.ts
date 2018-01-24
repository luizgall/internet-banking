import { Injectable } from '@angular/core';

@Injectable()
export class ChecarloginService {

  constructor() { }

  public isLogin(){
    if(localStorage.getItem("logado")){
      return true
    } else{
      return false
    }
  }

}
