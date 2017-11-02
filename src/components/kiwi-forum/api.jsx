import axios from 'axios';

export const fetchForums = (forum_id) => {
  return axios.get('http://localhost/processwire-test/api/test');
};

export const fetchUser = () => {
  return axios.get('/api/user/getUser');
};
