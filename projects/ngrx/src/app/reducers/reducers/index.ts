import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromUser from './user.reducer';
import * as fromInvoice from './user.reducer';


export const rootStateFeatureKey = 'rootState';

export interface RootState {
  users: fromUser.State;
  invoices: fromInvoice.State;
}

export const reducers: ActionReducerMap<RootState> = {
  users: fromUser.reducer,
  invoices: fromInvoice.reducer,
};


export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [] : [];
