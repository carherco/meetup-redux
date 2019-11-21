import { User } from 'src/app/model/user';

export enum UserActionTypes {
  LoadUsers = '[USER]_Load',
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
  constructor(public readonly payload: User[]) {}
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

export type UserActions = LoadUsers | SelectUser | AddUser | UpdateUser | DeleteUser | CloseMessageUser;


