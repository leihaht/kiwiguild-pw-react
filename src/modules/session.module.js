/*
 * Ducks structure / module
 * session reducers
 * check session information and see if the user is logged in or not.
 */
import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

// 액션 타입을 정의해줍니다.
const USER_LOGGEDIN         = 'app/session/USER_LOGGEDIN';
const USER_LOGGEDOUT        = 'app/session/USER_LOGGEDOUT';
const SESSION_FETCH_START   = 'app/session/SESSION_FETCH_START';
const SESSION_FETCH_STOP    = 'app/session/SESSION_FETCH_STOP';
const SESSION_FETCH_SUCCESS = 'app/session/SESSION_FETCH_SUCCESS';
const SESSION_FETCH_FAILURE = 'app/session/SESSION_FETCH_FAILURE';

// 액션 생성 함수를 만듭니다.
export const userLoggedin = createAction(USER_LOGGEDIN);
export const userLoggedout = createAction(USER_LOGGEDOUT);
export const sessionFetchStart = createAction(SESSION_FETCH_START);
export const sessionFetchStop = createAction(SESSION_FETCH_STOP);
export const sessionFetchSuccess = createAction(SESSION_FETCH_SUCCESS);
export const sessionFetchFailure = createAction(SESSION_FETCH_FAILURE);

// operations
export const checkSession = () => (dispatch) => {

}
const getForums = (currentForum) => {
  return (dispatch, getState) => {
    dispatch(actions.start_fetching());

    fetchForums(currentForum).then(
      data => dispatch(actions.success(data.data)),
      error => dispatch(actions.failure())
    );
  };
};

const initialState = Map({
    'user': Map({
        "_id": 0,
        "name": "",
        "email":"",
        "role":""
    }),
    "csrfToken": "",
    "isLoggedin": false,
    'fetching': false,
    'error': false
});

export default handleActions({
    [USER_LOGGEDIN]: (state, action) => {
        return state.set('isLoggedin', true);
    },
    [USER_LOGGEDOUT]: (state, action) => {
        return state.set('isLoggedin', false);
    },
    [SESSION_FETCH_START]: (state, action) => {
        return state.set('fetching', true);
    },
    [SESSION_FETCH_STOP]: (state, action) => {
        return state.set('fetching', false);
    },
    [SESSION_FETCH_SUCCESS]: (state, action) => {
        return state.set('user', action.payload.user)
            .set('csrfToken', action.payload.csrfToken)
            .set('fetching', false)
            .set('error', false);
    },
    [SESSION_FETCH_FAILURE]: (state, action) => {
        return state.set('error', true);
    }
}, initialState);
