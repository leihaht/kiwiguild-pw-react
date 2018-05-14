import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { fromJS } from 'immutable';
import { reducer as formReducer } from 'redux-form'

/*
import { createLogger } from 'redux-logger';
// 로그 미들웨어를 생성 할 때 설정을 커스터마이징 할 수 있습니다.
//  https://github.com/evgenyrodionov/redux-logger#options

const logger = createLogger();
const store = createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(
    applyMiddleware(logger, thunk)
  )
);
*/
// reducers
import appReducer from 'modules/app.module';
import feedReducer from 'modules/forumFeed';
import feedDiscussionReducer from 'modules/discussionFeed';
//import buttonReducer from '../components/kiwi-forum/modules/button';
import sessionReducer from 'modules/session.module';

// Grab the state from a global variable injected into the server-generated HTML
// convert JS object into immutable object except the root object
const preloadedState = fromJS(window.__PRELOADED_STATE__).toObject();

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// root reducer for app
const rootReducer = combineReducers({
  app: appReducer,
  feed: feedReducer,
  discussion: feedDiscussionReducer,
  //button: buttonReducer,
  session: sessionReducer,
  form: formReducer
});

const isDevelopment = process.env.NODE_ENV === 'development'; // 환경이 개발모드인지 확인합니다

// dev tool extension
// 개발모드에서만 리덕스 개발자도구 적용
const composeEnhancers = isDevelopment ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;

// application store
const store = createStore(
  rootReducer,
  /* preloaded state, */
  preloadedState,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;
