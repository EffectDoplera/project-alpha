import {all} from '@redux-saga/core/effects';
import {authWatcher} from './authSaga';
import {profileWatcher} from './profileSaga';
import {usersWatcher} from './usersSaga';

function* rootSaga(): any {
  yield all([usersWatcher(), authWatcher(), profileWatcher()]);
}

export default rootSaga;
