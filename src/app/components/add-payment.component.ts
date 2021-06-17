import {Component} from "@angular/core";
import {FormBuilder} from "@angular/forms";
import {Payment} from "../models/payment.model";

@Component({
  selector: 'add-payment-component',
  templateUrl: 'add-payment.component.html'
})
export class AddPaymentComponent {
  paymentForm = this.fb.group({
    id: [''],
    paymentAmount: [''],
    paymentDate: [''],
    supplierName: [''],
  });

  payments: Payment[] = [];

  constructor(private fb: FormBuilder) {
  }

  submit(): void {

    this.payments.push(
      {
        ...new Payment(),
        id: this.paymentForm.get("id")!.value,
        paymentAmount: this.paymentForm.get(["paymentAmount"])!.value,
        paymentDate: this.paymentForm.get(["paymentDate"])!.value,
        supplierName: this.paymentForm.get(["supplierName"])!.value,
      });
  }
}
