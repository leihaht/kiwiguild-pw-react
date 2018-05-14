import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import * as types from "./types";

const initialState = Map({
    dropdownOpen: false,
    currentButton: 0,
});

/**
 * reducer for top level app state
 */
export default handleActions({
    [types.TOGGLE_DROPDOWN]: (state, action) => {
        return state.set('dropdownOpen', !state.get('dropdownOpen'))
            .set('currentButton', action.payload);
    },
}, initialState);
