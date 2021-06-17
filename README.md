# PaymentsCalculator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.

This is a toy project to show the basic form that could be used to create multiple but related entities
in a single form workflow. In this instance we are creating two entities: Payment and Invoice, in which
payment has a one to many relationship with invoice. 

This is the payment object:

```javascript
    export class Payment {
      id!: number;
      paymentDate!: string;
      paymentAmount!: number;
      supplierName!: string;
      invoices!: Invoice[];
    }
```

And this is the invoice object:

```javascript
export class Invoice {
  id?: number;
  paymentId?: number;
  invoiceAmount?: number;
  invoiceDate?: string;
}
```
Instead of having different forms for both entities in which the later is correlated to the former
by use of the ```paymentId``` field here we attempt to take advantage of the ``` FormArray```
API to create both at the same time and maybe even share data between them so that the entry experience
is not repetitive. If it works the pattern can then be applied in a bigger project that is currently in
its design stage

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
