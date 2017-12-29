import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usa',
  templateUrl: './usa.component.html',
  styleUrls: ['./usa.component.css']
})
export class UsaComponent implements OnInit {
   isCollapsed: boolean = false;
   private b:number=0;
   private c:number=0;
  collapsed(event: any): void {
    console.log(event);
  }
  showb(){
   this.b=0;
   this.c=1;
  }
  showc(){
  this.b=1;
  this.c=0;
  }
  expanded(event: any): void {
    console.log(event);
   
  }
   
  constructor() { }
  ngOnInit() {
  }

}
