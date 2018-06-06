import * as actions from "./actions";
import axios from 'axios';

const isDevelopment = process.env.NODE_ENV === 'development'; // 환경이 개발모드인지 확인합니다
const basename = isDevelopment ? 'http://localhost/kiwigw-reactjs' : '/kiwigw';

/**
 * feed apis
 */
const fetchDiscussions = (forum_id, sortingMethod) => {
    return axios.get(`${basename}/api/discussions?tag=${forum_id}&sort=${sortingMethod}`);
};

const fetchPinnedDiscussions = (forum_id) => {
  return axios.get(`${basename}/api/tags/${forum_id}/pinned_discussions`);
};

/**
 * action to fetch forum discussions
 * @param  {String}  forum               current forum slug
 * @param  {Boolean} feedChanged         if the feed has been changed, default is false
 * @param  {String}  sortingMethod       define the sorting method, default is 'date'
 * @param  {Boolean} sortingChanged      if user chagned the sorting method
 * @return {thunk}
 */
const getDiscussions = (forumId, feedChanged=false, sortingChanged=false) => {
  return (dispatch, getState) => {
    const sortingMethod = getState().feed.get('sortingMethod');

    // show the loading message when user change forum or change sorting method
    if (feedChanged || sortingChanged) dispatch(actions.start_fetching());

    //if (!forumId) {
      //dispatch(actions.invalid());
    //}
    //else {
      // start fetching discussions
      fetchDiscussions(forumId, sortingMethod).then(
        data => dispatch(actions.success(data.data)),
        error => dispatch(actions.failure())
      );
    //}
  };
};

/**
 * Update sorting method
 * @param  {String} method
 * @return {action}
 */
const updateSortingMethod = actions.update_sorting;

export {
    getDiscussions,
    updateSortingMethod
};
