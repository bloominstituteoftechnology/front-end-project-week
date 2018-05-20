import axios from 'axios';

export const LOGIN = 'LOGIN';
export const ERROR = 'ERROR';

const host = 'https://ajlnbe.herokuapp.com/api/login';

export const login = data => dispatch => {
  axios
    .post(host, data)
    .then(response => {
      const token = response.data.token;
      const user = response.data.user;
      localStorage.setItem('Dragons!', token);
      dispatch({
        type: LOGIN,
        payload: user,
      });
    })
    .catch(err => {
      alert('Login failed.  Please try again.');
    });
};
