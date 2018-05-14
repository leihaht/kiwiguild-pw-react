import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import * as types from "./types";

// initialState
const initialState = Map({
  fetchingDiscussion: true,
  toggleingFavorite: false,
  postingComment: false,
  commentContent: null,
  commentError: null,
  deletingDiscussion: false,
  deletedDiscussion: false,
  deletingComment: null,
  discussion: null,
  error: null,
});
// reducer
export default handleActions({
    [types.FETCHING_SINGLE_DISC_START]: (state, action) => {
        return state.set('fetchingDiscussion', true);
    },
    [types.FETCHING_SINGLE_DISC_END]: (state, action) => {
        return state.set('fetchingDiscussion', false);
    },
    [types.FETCHING_SINGLE_DISC_SUCCESS]: (state, action) => {
        return state.set('discussion', action.payload)
            .set('fetchingDiscussion', false)
            .set('error', null);
    },
    [types.FETCHING_SINGLE_DISC_FAILURE]: (state, action) => {
        return state.set('fetchingDiscussion', false)
            .set('error', 'Unable to fetch discussion. Please check out the url.');
    },
}, initialState);
