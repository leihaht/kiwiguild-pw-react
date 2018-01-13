import { createAction } from 'redux-actions';
import * as types from "./types";

const start_fetching    = createAction(types.START_FETCHING_DISCUSSIONS);
const stop_fetching     = createAction(types.STOP_FETCHING_DISCUSSIONS);
const success           = createAction(types.FETCHING_DISCUSSIONS_SUCCESS);
const failure           = createAction(types.FETCHING_DISCUSSIONS_FAILURE);
const update_sorting    = createAction(types.UPDATE_SORTING_METHOD);
const invalid           = createAction(types.INVALID_FORUM);

export {
    start_fetching,
    stop_fetching,
    success,
    failure,
    update_sorting,
    invalid
};
