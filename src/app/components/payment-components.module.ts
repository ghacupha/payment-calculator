import {NgModule} from "@angular/core";
import {AddPaymentComponent} from "./add-payment.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [AddPaymentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [AddPaymentComponent]
})
export class PaymentComponentsModule{}
