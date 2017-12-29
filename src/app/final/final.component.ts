import { Component, OnInit } from '@angular/core';
import { TooltipConfig } from 'ngx-bootstrap/tooltip';

export function getAlertConfig(): TooltipConfig {
  return Object.assign(new TooltipConfig(), {
    placement: 'right',
    container: 'body'
  });
}

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css'],
  providers: [{ provide: TooltipConfig, useFactory: getAlertConfig }]
})
export class FinalComponent implements OnInit {
  a:number=0;
  b:number=0;
  constructor() { }
  show1(){
    this.a=1;
    this.b=0;
  }
  show2(){
    this.a=0;
    this.b=1;
  }
  ngOnInit() {
  }

}
