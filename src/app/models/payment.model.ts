import {Invoice} from "./invoice.model";

export class Payment {
  id!: number;
  paymentDate!: string;
  paymentAmount!: number;
  supplierName!: string;
  invoices?: Invoice[];
}
