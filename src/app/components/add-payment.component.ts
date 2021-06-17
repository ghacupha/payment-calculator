import {Component} from "@angular/core";
import {FormBuilder} from "@angular/forms";
import {Payment} from "../models/payment.model";

@Component({
  selector: 'add-payment-component',
  template: `
    <h4>Payments List</h4>
    <table>
      <thead>
      <tr>
        <th>Id</th>
        <th>Supplier Name</th>
        <th>Amount</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let payment of payments">
        <td>
          {{payment.id}}
        </td>
        <td>
          {{payment.supplierName}}
        </td>
        <td>
          {{payment.paymentAmount}}
        </td>
      </tr>
      </tbody>
    </table>
    <br/>
    <div>
      <h4>Add Payment</h4>
      <div>
        <form [formGroup]="paymentForm">
          <h5>Add Payment</h5>
          <div class="row">
            <label for="id">ID:</label>
            <input id="id" type="number" formControlName="id">
          </div>

          <div class="row">
            <label for="supplierName">Supplier Name:</label>
            <input type="text" id="supplierName" formControlName="supplierName">
          </div>

          <div class="row">
            <label for="paymentDate">Payment Date:</label>
            <input type="text" id="paymentDate" formControlName="paymentDate">
          </div>

          <div class="row">
            <label for="payment-amount">Payment Amount:</label>
            <input type="text" id="payment-amount" formControlName="paymentAmount">
          </div>

          <button (click)="submit()">Add Payment</button>
        </form>
      </div>
      <p>Form Status: {{paymentForm.status}}</p>
    </div>
  `
})
export class AddPaymentComponent {
  paymentForm = this.fb.group({
    id: [''],
    paymentAmount: [''],
    paymentDate: [''],
    supplierName: ['']
  });

  payments!: Payment[];

  constructor(private fb: FormBuilder) {
  }

  submit(): void {

    this.payments.push(
      ...this.payments,
      {
        ...new Payment(),
        id: this.paymentForm.get("id")!.value,
        paymentAmount: this.paymentForm.get(["paymentAmount"])!.value,
        paymentDate: this.paymentForm.get(["paymentDate"])!.value,
        supplierName: this.paymentForm.get(["supplierName"])!.value,
      });
  }
}
