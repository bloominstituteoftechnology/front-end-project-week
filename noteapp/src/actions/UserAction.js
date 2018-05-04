import axios from 'axios';

const ROOT = 'http://localhost:3000';

export const USER_REGISTERED = 'USER_REGISTERED';

export const register = (username, password, confirmPasword, history) => {
  return dispatch => {
    axios
      .post(`${ROOT}/register`, { username, password })
      .then(() => {
        dispatch({
          type: USER_REGISTERED
        });
        history.push('/signin');
      })
      .catch(error => {
        dispatch('failed to register');
        console.log(error);
      });
  };
};
