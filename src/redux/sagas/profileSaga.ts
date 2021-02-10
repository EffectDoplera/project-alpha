import { call, put, take, fork } from '@redux-saga/core/effects';
import { fetchProfileFailure, fetchProfileSuccess } from '../actions/profileActions';
import {fetchProfile as fetchProfileApi} from './api';

function* profileWorker(payload: any): any {
  try {
    const {data} = yield call(fetchProfileApi, payload)
    yield put(fetchProfileSuccess(data))
  } catch (error) {
    yield put(fetchProfileFailure(error))
  }
}

export function* profileWatcher() {
  while (true) {
    const action = yield take('PROFILE_REQUEST')
    yield fork(profileWorker, action.uid)
  }
}
