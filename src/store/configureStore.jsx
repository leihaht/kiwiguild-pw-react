import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

// reducers
import appReducer from '../components/kiwi-forum/modules/app';
import feedReducer from '../components/kiwi-forum/modules/forumFeed';
import feedDiscussionReducer from '../components/kiwi-forum/modules/discussionFeed';
//import buttonReducer from '../components/kiwi-forum/modules/button';

// root reducer for app
const rootReducer = combineReducers({
  app: appReducer,
  feed: feedReducer,
  discussion: feedDiscussionReducer,
  //button: buttonReducer
});

const isDevelopment = process.env.NODE_ENV === 'development'; // 환경이 개발모드인지 확인합니다

// dev tool extension
// 개발모드에서만 리덕스 개발자도구 적용
const composeEnhancers = isDevelopment ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;

// application store
let store = createStore(
  rootReducer,
  /* preloaded state, */
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;
