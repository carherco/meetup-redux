import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { UsersState } from '../reducers/user.store';
import { initialUsersState, reducer } from '../reducers/user.reducer';
import { UserAction } from '../reducers/user.actions';


@Injectable({
  providedIn: 'root'
})
export class ReduxUsersStateService {

    private state: UsersState = initialUsersState;
    private state$ = new Subject<any>();
    //private state$ = new BehaviorSubject<any>(this.state);

    constructor() {}

    public dispatch = (action: UserAction) => {
      this.state = reducer(this.state, action);
      this.state$.next(this.getSnapshot());
    }

    public getSnapshot = () => {
      return { ...this.state };
    }

    public select$ = () => this.state$.asObservable();
}

