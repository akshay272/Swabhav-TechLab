import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  message : string
  constructor() {
    this.message = " "
  }
  
  handleGreet(userName : string){
    let hr = new Date().getHours()
    let time = hr<12 ? "Morning" :
               hr<18 ? "afternoon":
               "evening"
    this.message = `Hello ${userName} , good ${time}`
  }

  

  ngOnInit(): void {
  }

}
