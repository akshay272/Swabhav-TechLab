import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-blueball',
  templateUrl: './blueball.component.html',
  styleUrls: ['./blueball.component.css']
})
export class BlueballComponent implements OnInit {

  constructor() { }

  start(e:string){
    console.log(e);
  }
  ngOnInit(): void {
  }

}
