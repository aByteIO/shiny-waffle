import { AuthActions, AuthActionTypes } from '../actions/auth.actions';


export interface State {
  keys: string;
}

export const initialState: State = {
  keys: null
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {
    case AuthActionTypes.GET_KEYS_SUCCESS:
      return {
        ...state,
        keys: action.payload
      };
    default:
      return state;
  }
}
