import * as actions from "./actions";
import axios from 'axios';

const fetchForums = (forum_id) => {
  return axios.get(`http://localhost/processwire-test/api/tags/${forum_id}`);
};

const fetchUser = () => {
  return axios.get('/api/user/getUser');
};

/**
 * get all forum list
 * @return {action}
 */
const getForums = (currentForum) => {
  return (dispatch, getState) => {
    dispatch(actions.start_fetching());

    fetchForums(currentForum).then(
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
const updateCurrentForum = (currentForum) => {
    return actions.update(currentForum);
};

// update root class
const updateRootclass = actions.rootclass;

// open composer popup
const openComposer = actions.open_composer;

// close composer popup
const closeComposer = actions.close_composer;

export {
    getForums,
    updateCurrentForum,
    updateRootclass,
    openComposer,
    closeComposer,
};
