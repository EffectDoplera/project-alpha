import {AxiosResponse} from 'axios';
import {call, fork, put, take} from '@redux-saga/core/effects';
import {authFailure, authSuccess, AUTH_REQUEST} from '../actions/authActions';
import {auth as authApi} from './api';

function* authWorker(authData: any) {
  try {
    const response: AxiosResponse = yield call(authApi, authData);
    yield put(authSuccess(response));
  } catch (error) {
    yield put(authFailure(error.message));
  }
}

export function* authWatcher() {
  while (true) {
    const action = yield take(AUTH_REQUEST);
    yield fork(authWorker, action.authData);
  }
}
