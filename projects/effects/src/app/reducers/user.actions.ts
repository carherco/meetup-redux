import { Action } from '@ngrx/store';
import { User } from 'src/app/model/user';

export enum UserActionTypes {
  LoadUsers = '[User] Load Users',
  LoadUsersSuccess = '[User] Load Users Success',
  LoadUsersFailure = '[User] Load Users Failure',
  SelectUser = '[USER]_Select',
  AddUser = '[USER]_Add',
  UpdateUser = '[USER]_Update',
  DeleteUser = '[USER]_Delete',
  CloseMessageUser = '[USER]_CloseMessage'
}

export interface UserAction {
  readonly type: string;
  readonly payload?: any;
}

export class LoadUsers implements UserAction {
  readonly type = UserActionTypes.LoadUsers;
}

export class LoadUsersSuccess implements UserAction {
  readonly type = UserActionTypes.LoadUsersSuccess;
  constructor(public readonly payload: User[]) { }
}

export class LoadUsersFailure implements UserAction {
  readonly type = UserActionTypes.LoadUsersFailure;
  constructor(public payload: any ) { }
}

export class SelectUser implements UserAction {
  readonly type = UserActionTypes.SelectUser;
  constructor(public readonly payload: User) {}
}

export class AddUser implements UserAction {
  readonly type = UserActionTypes.AddUser;
  constructor(public readonly payload: User) {}
}

export class UpdateUser implements UserAction {
  readonly type = UserActionTypes.UpdateUser;
  constructor(public readonly payload: User) {}
}

export class DeleteUser implements UserAction {
  readonly type = UserActionTypes.DeleteUser;
  constructor(public readonly payload: User) {}
}

export class CloseMessageUser implements UserAction {
  readonly type = UserActionTypes.CloseMessageUser;
  constructor() {}
}

export type UserActions = LoadUsers | LoadUsersSuccess | LoadUsersFailure | SelectUser | AddUser | UpdateUser | DeleteUser | CloseMessageUser;

