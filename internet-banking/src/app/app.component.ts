import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import{ServiceService} from './services/service.service'
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private serviceService:ServiceService){

  }
  title = 'app';
  ngOnInit(){
    this.serviceService.doGet()
  }

}
