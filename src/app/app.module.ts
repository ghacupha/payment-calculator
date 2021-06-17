import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PaymentComponentsModule} from "./components/payment-components.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaymentComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
