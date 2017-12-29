import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
   providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true } }
  ]
})
export class HomeComponent implements OnInit {
  const arr=["业务部主要负责对外邮件的处理和对内设计问题的沟通；","设计部主要负责设计方面的工作","印刷部主要负责印刷方面的相关事宜","摄影部正在成立中。。。","颜色管理部门主要负责看色"]；
  const i:number=0;
  const brr=["业务部","设计部","印刷部","摄影部","颜色管理部门"];
  const crr=["glyphicon glyphicon-envelope","glyphicon glyphicon-picture","glyphicon glyphicon-duplicate","glyphicon glyphicon-camera","glyphicon glyphicon-sunglasses"];
  constructor() { 
    setInterval(()=>{
      this.i=Math.floor(Math.random()*4+1);
      console.log(this.i)
    },2000)
  }
  show(b,e){
    this.i=b;
  }
  ngOnInit() {

  }

}
