import { combineReducers } from 'redux';

import dialogsReducer from './dialogs';
import profileReducer from './profile';
import usersReducer from './users';
import authReducer from './auth';

const rootReducer = combineReducers({
  dialogs: dialogsReducer,
  profile: profileReducer,
  users: usersReducer,
  auth: authReducer,
});

export default rootReducer;
