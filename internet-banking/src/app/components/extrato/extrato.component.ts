import { Component, OnInit } from '@angular/core';
import { ExtratoService } from '../../services/extrato.service'

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  constructor(private extratoService:ExtratoService) { }

  logs = []
  that = this
  atualizar(res, that){
    that.logs = res.logs.reverse()
    console.log(that.logs)
  }

  ngOnInit() {
    this.extratoService.getExtract(1001, this.atualizar, this.that)
 
  }


}
