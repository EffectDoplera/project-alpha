import {all} from 'redux-saga/effects'
import { usersWatcher } from './usersSaga';

function* rootSaga(): any {
  yield all([usersWatcher()])
}

export default rootSaga
