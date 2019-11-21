import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { SelectUser, UpdateUser, DeleteUser, LoadUsers, CloseMessageUser, AddUser } from '../../reducers/user.actions';
import { UserService } from 'src/app/services/user.service';
import { Store } from '@ngrx/store';
import { State as UserState } from '../../reducers/user.reducer';
import { RootState } from '../../reducers';

@Component({
  selector: 'app-usuarios-master',
  templateUrl: './usuarios-master.component.html',
  styleUrls: ['./usuarios-master.component.css']
})
export class UsuariosMasterComponent {

  users: User[] = [];
  selectedUser: User;
  newUser: User;
  message: string;
  private lastIndex = 10;

  constructor(private store: Store<RootState>, private userService: UserService) {
    this.newUser = new User();
    this.store.select('users').subscribe(
      (state: UserState) => {
        this.users = state.items;
        this.selectedUser = state.selectedItem;
        this.newUser = state.newItem;
        this.lastIndex = state.lastId;
        this.message = state.message;
      }
    );

    this.store.dispatch( new LoadUsers() );
  }

  add(user) {
    this.store.dispatch( new AddUser(user) );
  }

  select(user: User) {
    this.store.dispatch( new SelectUser(user) );
  }

  update(user: User) {
    this.store.dispatch( new UpdateUser(user) );
  }

  delete(user: User) {
    this.store.dispatch( new DeleteUser(user) );
  }

  closeAlert() {
    this.store.dispatch( new CloseMessageUser() );
  }
}
