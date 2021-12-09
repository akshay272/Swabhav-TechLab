import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  message : string
  imageUrl = "assets//spinner.gif"
  hideImage = true
  constructor() {
    this.message = " "
   }

   calculateDiscount(amount1 : any, rate1:any): void{
    let discount = amount1*rate1/100

    setTimeout(() => {
      this.hideImage = !this.hideImage;
    }, 100)
    
    setTimeout(() =>{

      this.hideImage = !this.hideImage
      
      this.message = `displaying after 5 seconds ` + "     " +
                      
                      `Discount : Rs. ${discount}`
    },5000)
    
    
    
  }
  
  
  ngOnInit() : void {
     
  }

} 
