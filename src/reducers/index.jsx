import { combineReducers } from 'redux';

// reducers
import { appReducer } from '../components/kiwi-forum/reducers';

// root reducer for app
const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
