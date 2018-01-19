import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import * as types from "./types";

// immutable 를 통해 만든 Map | List 객체들은
// 일반 객체가 아니므로 state.app.forums 등등으로 불러올 수 없다.
// state.app.get('forums') 같은식으로 불러와야된다.
// 값을 설정할때는 state.app.set('forums') 형식으로 한다.
const initialState = Map({
    fetchingForums: false,
    tags: null,
    currentForum: 'general',
    error: false,
});

/**
 * reducer for top level app state
 */
export default handleActions({
    [types.START_FETCHING_FORUMS]: (state, action) => {
        return state.set('fetchingForums', true);
    },
    [types.FETCHING_FORUMS_SUCCESS]: (state, action) => {
        return state.set('tags', action.payload)
            .set('fetchingForums', false)
            .set('error', false);
    },
    [types.UPDATECURRENTFORUM]: (state, action) => {
        return state.set('currentForum', action.payload);
    },
}, initialState);
/**
 * reducer for top level app state
 */
