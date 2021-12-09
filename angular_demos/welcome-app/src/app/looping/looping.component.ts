import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-looping',
  templateUrl: './looping.component.html',
  styleUrls: ['./looping.component.css']
})
export class LoopingComponent implements OnInit {

  makeList(size : number){
    return new Array(size)
  }
  getColor(isEven : boolean){
    return isEven? "green" :
            "blue"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
