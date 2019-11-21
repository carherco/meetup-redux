import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/model/user';
import { ReduxUsersStateService } from '../../services/user-state.service';
import { UsersState } from '../../reducers/user.store';
import { AddUser, SelectUser, UpdateUser, DeleteUser, LoadUsers, CloseMessageUser } from '../../reducers/user.actions';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private userReduxService: ReduxUsersStateService, private userService: UserService) {
    this.newUser = new User();
    this.userReduxService.select$().subscribe(
      (state: UsersState) => {
        this.users = state.items;
        this.selectedUser = state.selectedItem;
        this.newUser = state.newItem;
        this.lastIndex = state.lastId;
        this.message = state.message;
      }
    );

    this.userReduxService.dispatch( new LoadUsers(this.userService.getAll()) );
  }

  add(user) {
    this.userReduxService.dispatch( new AddUser(user) );
  }

  select(user: User) {
    this.userReduxService.dispatch( new SelectUser(user) );
  }

  update(user: User) {
    this.userReduxService.dispatch( new UpdateUser(user) );
  }

  delete(user: User) {
    this.userReduxService.dispatch( new DeleteUser(user) );
  }

  closeAlert() {
    this.userReduxService.dispatch( new CloseMessageUser() );
  }
}
