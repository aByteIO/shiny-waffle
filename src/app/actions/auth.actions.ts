import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  GET_KEYS = '[Auth] Get keys',
  GET_KEYS_SUCCESS = '[Auth] Get keys successful',
  GET_KEYS_ERROR = '[Auth] Get keys error'
}

export class GetKeys implements Action {
  readonly type = AuthActionTypes.GET_KEYS;
}

export class GetKeysSuccess implements Action {
  readonly type = AuthActionTypes.GET_KEYS_SUCCESS;
  constructor(public payload: any) { }
}

export class GetKeysError implements Action {
  readonly type = AuthActionTypes.GET_KEYS_ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type AuthActions
  = GetKeys
  | GetKeysSuccess
  | GetKeysError
  ;
