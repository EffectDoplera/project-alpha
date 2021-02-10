import { AuthActions } from '../redux/actions/authActions';

export interface IAuthState {
  readonly token: null | string,
  readonly userId: string
}

const initialState: IAuthState = {
  token: null,
  userId: ''
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AuthActions.AUTH_SUCCESS:
      return { ...state, token: action.token };
    case AuthActions.AUTH_LOGOUT:
      return { ...state, token: null };
    case 'AUTO_LOGIN':
      return {...state, token: action.payload.token, userId: action.payload.userId}
    default:
      return state;
  }
};

export default authReducer
