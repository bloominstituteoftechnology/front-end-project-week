import axios from 'axios';

export const CREATE_USER = 'CREATE_USER';

const host = 'https://ajlnbe.herokuapp.com/api/register';

export const createUser = data => dispatch => {
  axios
    .post(host, data)
    .then(response => {
      const token = response.data.token;
      const user = response.data.user;
      localStorage.setItem('Dragons!', token);
      dispatch({
        type: CREATE_USER,
        payload: user,
      });
    })
    .catch(err => alert('Account creation failed.  Please try again.'));
};
