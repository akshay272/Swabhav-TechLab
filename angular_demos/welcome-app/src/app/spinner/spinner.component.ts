import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  paraContent = "Hello inside paragraph"
  imageUrl = "assets//spinner.gif"
  btnText = "show"
  hideImage = true;

  handleToggle(e:any){
    console.log(e.target)
    this.hideImage = !this.hideImage
    if(this.btnText == "show"){
      this.btnText = "hide"
      return
    }
    if(this.btnText == "hide"){
      this.btnText= "show"
    }
  }

  showSpinner(){
    this.hideImage = !this.hideImage
  }
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
