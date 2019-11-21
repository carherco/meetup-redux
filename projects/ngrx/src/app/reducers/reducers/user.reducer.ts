import { Action } from '@ngrx/store';
import { UserActionTypes, UserAction } from './user.actions';
import { User } from 'src/app/model/user';


export const userFeatureKey = 'user';

export interface State {
  items: User[];
  newItem: User;
  selectedItem: User;
  lastId: number;
  message: string;
}

export const initialState: State = {
  items: [],
  newItem: new User(),
  selectedItem: null,
  lastId: 10,
  message: ''
};

export function reducer(state = initialState, action: UserAction): State {
  let newstate = {...state};
  switch (action.type) {

    case UserActionTypes.LoadUsers:
      newstate.items = action.payload;
      newstate.lastId = newstate.items.length;
      break;

    case UserActionTypes.SelectUser:
      newstate.selectedItem = {...action.payload};
      break;

    case UserActionTypes.AddUser:
      newstate.items = [...newstate.items];
      const newUser = { ...action.payload, id: newstate.lastId + 1 };
      newstate.items.push(newUser);
      newstate.lastId = newstate.lastId + 1;
      newstate.newItem = new User();
      newstate.message = 'Elemento añadido con éxito';
      break;

    case UserActionTypes.UpdateUser:
      const updatedUser = action.payload;
      const foundIndex = newstate.items.findIndex(i => i.id === updatedUser.id);
      newstate.items = [...newstate.items];
      newstate.items[foundIndex] = {...updatedUser};
      newstate.message = 'Elemento guardado con éxito';
      break;

    case UserActionTypes.DeleteUser:
      const deletedUser = action.payload;
      newstate.items = newstate.items.filter( item => item.id !== deletedUser.id );
      newstate.message = 'Elemento eliminado con éxito';
      if (newstate.selectedItem && newstate.selectedItem.id === deletedUser.id) {
        newstate.selectedItem = null;
      }
      break;

    case UserActionTypes.CloseMessageUser:
      newstate.message = '';
      break;

    default:
      return state;
  }
  return newstate;
}
