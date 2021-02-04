import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchProfileFailure } from '../actions/profileActions';
import { fetchUsersSuccess } from '../actions/usersActions';
import {fetchProfile as fetchProfileApi} from './api';

function* profileWorker(): any {
  try {
    const {data} = yield call(fetchProfileApi)
    yield put(fetchUsersSuccess(data))
  } catch (error) {
    yield put(fetchProfileFailure(error))
  }
}

export function* profileWatcher() {
  yield takeEvery('PROFILE_REQUEST', profileWorker)
}
