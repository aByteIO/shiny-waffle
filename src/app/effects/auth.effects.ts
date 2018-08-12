import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AuthActionTypes, GetKeysSuccess, GetKeysError } from '../actions/auth.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  @Effect()
  getKeys$ = this.actions$
    .ofType(AuthActionTypes.GET_KEYS)
    .pipe(
      switchMap(() =>
      this.authService.getKeys()
        .pipe(
          map(keys => new GetKeysSuccess(keys)),
          catchError(error => of(new GetKeysError(error)))
        )
      )
    );

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) { }
}
