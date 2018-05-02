import axios from 'axios';

export const LOGIN = 'LOGIN';
export const ERROR = 'ERROR';

const host = 'https://ajlnbe.herokuapp.com/api/login';

export const login = data => dispatch => {
  console.log('in login');
  axios
    .post(host, data)
    .then(response => {
      if (response === 'Unauthorized') {
        alert('Login failed.  Please try again.');
      } else {
        const token = response.data.token;
        const user = response.data.user;
        localStorage.setItem('Dragons!', token);
        console.log(response, 'response');
        dispatch({
          type: LOGIN,
          payload: user,
        });
      }
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
    });
};
