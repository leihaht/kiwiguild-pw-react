import * as actions from "./actions";
import axios from 'axios';

/**
 * feed apis
 */
const fetchSingleDiscussion = (discussionSlug) => {
    return axios.get(`http://localhost/processwire-test/api/discussions/${discussionSlug}`);
};

/**
 * get the discussion from server
 * @param  {String} discussionSlug
 * @return {action}
 */
const getDiscussion = (discussionSlug) => {
    return (dispatch, getState) => {
        dispatch(actions.start_fetching());
        fetchSingleDiscussion(discussionSlug).then(
            data => {
                if (data.data) dispatch(actions.success(data.data));
                else dispatch(actions.failure());
            },
            error => dispatch(actions.failure())
        );
    };
};

export {
    getDiscussion
};
