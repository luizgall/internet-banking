import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceService {

  constructor(private http:HttpClient) {

   }

   public doGet(){
    let url = `http://localhost:3000/api/users`;
    this.http.get(url).subscribe(res => console.log(res));
   }
}
