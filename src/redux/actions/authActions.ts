import {AxiosResponse} from 'axios';

export enum AuthActions {
  AUTH_SUCCESS = 'AUTH_SUCCESS',
  AUTH_FAILURE = 'AUTH_FAILURE',
  AUTH_LOGOUT = 'AUTH_LOGOUT',
}

export const AUTH_REQUEST = 'AUTH_REQUEST';

export const authRequest = (authData: any) => ({type: AUTH_REQUEST, authData});
export const authSuccess = (responseData: AxiosResponse) => {
  localStorage.setItem('token', responseData.data.token);
  localStorage.setItem('userId', responseData.data.user._id);

  return {type: AuthActions.AUTH_SUCCESS, token: responseData.data.token};
};
export const authFailure = (error: string) => ({
  type: AuthActions.AUTH_FAILURE,
  error,
});

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');

  return {type: AuthActions.AUTH_LOGOUT};
};

export const autoLogin = () => {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId') || '';
  return {type: 'AUTO_LOGIN', payload: {token, userId}};
};

export const autoLogout = (time: number) => ({type: 'AUTO_LOGOUT'});
