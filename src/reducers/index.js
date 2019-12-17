import { combineReducers } from 'redux';

import authenticate from './auth';

const reducers = combineReducers({
  authenticate,
});

export default reducers;
