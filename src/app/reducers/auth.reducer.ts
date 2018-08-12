import { AuthActions, AuthActionTypes } from '../actions/auth.actions';


export interface State {
  key1: string;
}

export const initialState: State = {
  key1: null
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {
    case AuthActionTypes.GET_KEYS_SUCCESS:
      return {
        ...state,
        key1: ''
      };
    default:
      return state;
  }
}
