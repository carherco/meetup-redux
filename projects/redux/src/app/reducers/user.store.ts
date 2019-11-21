import { User } from 'src/app/model/user';

export interface UsersState {
  items: User[];
  newItem: User;
  selectedItem: User;
  lastId: number;
  message: string;
}

