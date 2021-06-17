import {Component} from "@angular/core";
import {FormArray, FormBuilder} from "@angular/forms";
import {Payment} from "../models/payment.model";
import {Invoice} from "../models/invoice.model";

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
    invoices: this.fb.array([
      this.fb.group({
        invoiceId: [''],
        paymentId: [''],
        invoiceAmount: [''],
        invoiceDate: ['']
      })
    ])
  })

  payments: Payment[] = [];

  constructor(private fb: FormBuilder) {
  }

  submit(): void {
    this.payments.push(this.createPayment());
  }

  createPayment() {
    const invoiceArr: Invoice[] = []
    this.invoices.value.forEach((invoice: Invoice) => {
      invoiceArr.push(invoice)
    })

    return {
    ...new Payment(),
      id: this.paymentForm.get("id")!.value,
      paymentAmount: this.paymentForm.get(["paymentAmount"])!.value,
      paymentDate: this.paymentForm.get(["paymentDate"])!.value,
      supplierName: this.paymentForm.get(["supplierName"])!.value,
      invoices: invoiceArr
    }
  }

  get invoices() {
    return this.paymentForm.get('invoices') as FormArray;
  }

  addInvoice() {
    this.invoices.push(this.fb.group({
      invoiceId: [''],
      paymentId: [''],
      invoiceAmount: [''],
      invoiceDate: ['']
    }));
  }
}
