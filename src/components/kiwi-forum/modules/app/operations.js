import * as actions from "./actions";
import axios from 'axios';

const fetchForums = (forum_id) => {
  return axios.get('http://localhost/processwire-test/api/forums');
};

const fetchUser = () => {
  return axios.get('/api/user/getUser');
};

/**
 * get all forum list
 * @return {action}
 */
export const getForums = () => {
  return (dispatch, getState) => {
    dispatch(actions.start_fetching());

    fetchForums().then(
      data => dispatch(actions.success(data.data)),
      error => dispatch(actions.failure())
    );
  };
};
/**
 * update current forum when route change occurs
 * @param  {String} currentForum
 * @return {action}
 */
export const updateCurrentForum = (currentForum) => {
  return actions.update(currentForum);
};
