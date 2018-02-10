import { createAction } from 'redux-actions';
import * as types from "./types";

const update            = createAction(types.UPDATECURRENTTAGS);
const start_fetching    = createAction(types.START_FETCHING_TAGS);
const stop_fetching     = createAction(types.STOP_FETCHING_TAGS);
const success           = createAction(types.FETCHING_TAGS_SUCCESS);
const failure           = createAction(types.FETCHING_TAGS_FAILURE);
const start_user        = createAction(types.START_FETCHING_USER);
const success_user      = createAction(types.FETCHING_USER_SUCCESS);
const failure_user      = createAction(types.FETCHING_USER_FAILURE);
const success_signout   = createAction(types.SIGNOUT_USER_SUCCESS);
const failure_signout   = createAction(types.SIGNOUT_USER_FAILURE);
const rootclass         = createAction(types.UPDATE_ROOT_CLASS);
const open_composer     = createAction(types.OPEN_COMPOSER);
const close_composer    = createAction(types.CLOSE_COMPOSER);

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
    failure_signout,
    rootclass,
    open_composer,
    close_composer
};
