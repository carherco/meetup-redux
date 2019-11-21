import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect } from '@ngrx/effects';
import { UserActionTypes, LoadUsersSuccess, LoadUsersFailure } from './user.actions';
import { filter, flatMap, map, catchError, tap, concatMap } from 'rxjs/operators';
import { UserHttpService } from 'src/app/services/userHttp.service';
import { of } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable()
export class UserEffects {

  @Effect()
  public loadUsersEffect$ = this.actions$.pipe(
    tap( x => console.log(x) ),
    filter( action => action.type === UserActionTypes.LoadUsers),
    flatMap(() =>
      this.userHttpService.getAll().pipe(
        map( (users: User[]) => new LoadUsersSuccess(users)),
        catchError( err => of(new LoadUsersFailure(err)))
      )
    )
  );

  constructor(private actions$: Actions, private userHttpService: UserHttpService) {}

}
