import {call, put, takeEvery} from '@redux-saga/core/effects';
import {fetchUsersFailure, fetchUsersSuccess} from '../actions/usersActions';
import {fetchUsers as fetchUsersApi} from './api';

function* usersWorker(): any {
  try {
    const {data} = yield call(fetchUsersApi);
    yield put(fetchUsersSuccess(data));
  } catch (error) {
    yield put(fetchUsersFailure(error));
  }
}

//TODO: Пофиксить бесконечный цикл запросов при использовании константы
export function* usersWatcher() {
  yield takeEvery('USERS_REQUEST', usersWorker);
}
