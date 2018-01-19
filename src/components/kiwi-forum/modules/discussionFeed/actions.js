import { createAction } from 'redux-actions';
import * as types from "./types";

const start_fetching    = createAction(types.FETCHING_SINGLE_DISC_START);
const end_fetching     = createAction(types.FETCHING_SINGLE_DISC_END);
const success           = createAction(types.FETCHING_SINGLE_DISC_SUCCESS);
const failure           = createAction(types.FETCHING_SINGLE_DISC_FAILURE);

export {
    start_fetching,
    end_fetching,
    success,
    failure
};
