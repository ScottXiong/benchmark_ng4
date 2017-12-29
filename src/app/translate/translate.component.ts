import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {
  private a:number=0;
  private b:number=0;
  constructor() { }
  show1(){
    this.a=1
    this.b=0
  }
  show2(){
    this.b=1;
    this.a=0
  }
  ngOnInit() {
  }

}
