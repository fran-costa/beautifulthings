import { combineReducers } from 'redux';

import account from './account';
import entries from './entries';
import entriesByDate from './entriesByDate';

import { SIGN_OUT } from 'actions/account';

const appReducer = combineReducers({
  account,
  entries,
  entriesByDate,
});

const rootReducer = (state, action) => {
  if (action.type === SIGN_OUT) {
    state = undefined;
  }

  return appReducer(state, action);
}

export default rootReducer;
