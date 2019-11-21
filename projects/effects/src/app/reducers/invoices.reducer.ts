import { Action, createReducer, on } from '@ngrx/store';


export const invoicesFeatureKey = 'invoices';

export interface State {

}

export const initialState: State = {

};

const invoicesReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return invoicesReducer(state, action);
}
