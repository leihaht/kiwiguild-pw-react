import * as actions from "./actions";
import axios from 'axios';

const isDevelopment = process.env.NODE_ENV === 'development'; // 환경이 개발모드인지 확인합니다
const basename = isDevelopment ? 'http://localhost/kiwigw-reactjs' : '/kiwigw';

/**
 * feed apis
 */
const fetchSingleDiscussion = (discussionSlug) => {
    return axios.get(`${basename}/api/discussions/${discussionSlug}`);
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
