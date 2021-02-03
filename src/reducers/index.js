import { combineReducers } from 'redux';

import dialogsReducer from './dialogs';
import profileReducer from './profile';
import usersReducer from './users';

const rootReducer = combineReducers({
  dialogs: dialogsReducer,
  profile: profileReducer,
  users: usersReducer,
});

export default rootReducer;
