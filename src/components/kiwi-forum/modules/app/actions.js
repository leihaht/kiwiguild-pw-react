import { createAction } from 'redux-actions';
import * as types from "./types";

const update            = createAction(types.UPDATECURRENTFORUM);
const start_fetching    = createAction(types.START_FETCHING_FORUMS);
const stop_fetching     = createAction(types.STOP_FETCHING_FORUMS);
const success           = createAction(types.FETCHING_FORUMS_SUCCESS);
const failure           = createAction(types.FETCHING_FORUMS_FAILURE);
const start_user        = createAction(types.START_FETCHING_USER);
const success_user      = createAction(types.FETCHING_USER_SUCCESS);
const failure_user      = createAction(types.FETCHING_USER_FAILURE);
const success_signout   = createAction(types.SIGNOUT_USER_SUCCESS);
const failure_signout   = createAction(types.SIGNOUT_USER_FAILURE);

export {
    update,
    start_fetching,
    stop_fetching,
    success,
    failure,
    start_user,
    success_user,
    failure_user,
    success_signout,
    failure_signout
};
