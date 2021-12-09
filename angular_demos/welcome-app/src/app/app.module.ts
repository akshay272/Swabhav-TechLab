import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WelcomeComponent } from './welcome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { GreetComponent } from './greet/greet.component';
import { DiscountComponent } from './discount/discount.component';
import { LoopingComponent } from './looping/looping.component';
import { BlueballComponent } from './blueball/blueball.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    GreetComponent,
    DiscountComponent,
    LoopingComponent,
    BlueballComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [WelcomeComponent]
})
export class AppModule { }
