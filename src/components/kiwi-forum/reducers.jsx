import {
  START_FETCHING_FORUMS,
  STOP_FETCHING_FORUMS,
  FETCHING_FORUMS_SUCCESS,
  FETCHING_FORUMS_FAILURE,
  UPDATECURRENTFORUM,
  START_FETCHING_USER,
  FETCHING_USER_SUCCESS,
  FETCHING_USER_FAILURE,
} from './constants';

const initialState = {
  fetchingForums: false,
  forums: null,
  currentForum: 'general',
  error: false,
};

/**
 * reducer for top level app state
 */
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_FORUMS:
      return Object.assign({}, state, {
        fetchingForums: true,
      });

    default:
      return state;
  }
};
