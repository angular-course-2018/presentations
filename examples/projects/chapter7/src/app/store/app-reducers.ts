import { AppActionsUnion, AppAction } from './app.actions';
import { UserState } from './app-state';

const initialState: UserState = {
  firstname: '',
  lastname: '',
  fullname: '',
};

export function userReducer(state = initialState, action: AppActionsUnion) {
  switch (action.type) {
    case AppAction.SET_FIRSTNAME:
      return { ...state, firstname: action.payload };
    case AppAction.SET_LASTNAME:
    return { ...state, lastname: action.payload };
    default:
      return state;
  }
}
