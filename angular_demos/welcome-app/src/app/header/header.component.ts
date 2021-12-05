import { Component, OnInit } from '@angular/core';
//import { stringify } from 'querystring';

@Component({
  selector: 'sw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerTitle: string
  constructor() {
    this.headerTitle = "This is Company Header"
   }

  ngOnInit(): void {
  }

}
