import { combineReducers } from 'redux';

// reducers
import { appReducer } from '../components/kiwi-forum/Containers/SideNav/reducers';

// root reducer for app
const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
