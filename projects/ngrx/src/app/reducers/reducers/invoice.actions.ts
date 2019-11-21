import { Action } from '@ngrx/store';

export enum InvoiceActionTypes {
  LoadInvoices = '[Invoice] Load Invoices',
  
  
}

export class LoadInvoices implements Action {
  readonly type = InvoiceActionTypes.LoadInvoices;
}


export type InvoiceActions = LoadInvoices;
