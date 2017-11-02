import _ from 'lodash';
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
import {
  fetchForums,
  fetchUser,
  signOut,
} from './api';

/**
 * get all forum list
 * @return {action}
 */
export const getForums = () => {
  return (dispatch, getState) => {
    dispatch({ type: START_FETCHING_FORUMS });

    fetchForums().then(
      data => dispatch({ type: FETCHING_FORUMS_SUCCESS, payload: data.data }),
      error => dispatch({ type: FETCHING_FORUMS_FAILURE })
    );
  };
};
