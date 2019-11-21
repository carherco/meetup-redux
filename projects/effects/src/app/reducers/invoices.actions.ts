import { createAction, props } from '@ngrx/store';

export const loadInvoicess = createAction(
  '[Invoices] Load Invoicess'
);

export const loadInvoicessSuccess = createAction(
  '[Invoices] Load Invoicess Success',
  props<{ data: any }>()
);

export const loadInvoicessFailure = createAction(
  '[Invoices] Load Invoicess Failure',
  props<{ error: any }>()
);
