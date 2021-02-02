import { combineReducers } from 'redux';

import dialogsReducer from './dialogs';
import profileReducer from './profile';

const rootReducer = combineReducers({
  dialogs: dialogsReducer,
  profile: profileReducer,
});

export default rootReducer;
