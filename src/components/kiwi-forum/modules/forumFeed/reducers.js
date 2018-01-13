import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import * as types from "./types";

// initialState
const initialState = Map({
  fetchingDiscussions: true,
  discussions: null,
  fetchingPinnedDiscussions: true,
  pinnedDiscussions: null,
  sortingMethod: 'date',
  error: null,
});

// reducer
export default handleActions({
    [types.START_FETCHING_DISCUSSIONS]: (state, action) => {
        return state.set('fetchingDiscussions', true)
            .set('error', null);
    },
    [types.STOP_FETCHING_DISCUSSIONS]: (state, action) => {
        return state.set('fetchingDiscussions', false);
    },
    [types.FETCHING_DISCUSSIONS_SUCCESS]: (state, action) => {
        return state.set('discussions', action.payload)
            .set('fetchingDiscussions', false)
            .set('error', null);
    },
    [types.FETCHING_DISCUSSIONS_FAILURE]: (state, action) => {
        return state.set('fetchingDiscussions', false)
            .set('error', 'Unable to fetch discussions at the moment.');
    },
    [types.UPDATE_SORTING_METHOD]: (state, action) => {
        return state.set('sortingMethod', action.payload);
    },
    [types.INVALID_FORUM]: (state, action) => {
        return state.set('error', "Sorry, couldn\'t find the forum.")
            .set('fetchingPinnedDiscussions', false)
            .set('fetchingDiscussions', false);
    },
}, initialState);
