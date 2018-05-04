import axios from 'axios';
axios.defaults.withCredentials = false;
const ROOT_URL = 'http://localhost:5050';

export const USER_REGISTERED = 'USER_REGISTERED';
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const USER_UNAUTHENTICATED = 'USER_UNAUTHENTICATED';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const GET_USERS = 'GET_USERS';
export const CHECK_IF_AUTHENTICATED = 'CHECK_IF_AUTHENTICATED';

export const authError = error => {
  return {
    type: AUTHENTICATION_ERROR,
    payload: error
  };
};

export const register = (
  firstName,
  lastName,
  email,
  username,
  password,
  confirmPassword,
  history
) => {
  return dispatch => {
    if (this.password !== this.confirmPassword) {
      dispatch(authError('Passwords do not match'));
      return;
    }
    console.log(
      username,
      firstName,
      lastName,
      password,
      email,
      history,
      'action'
    );
    axios
      .post(`${ROOT_URL}/api/register`, {
        firstName,
        lastName,
        email,
        username,
        password
      })
      .then(() => {
        dispatch({
          type: USER_REGISTERED
        });
        console.log(history);
        history.push(`/signin`);
      })
      .catch(() => {
        dispatch(authError('Failed to register user'));
      });
  };
};

export const login = (username, password, history) => {
  return dispatch => {
    console.log(username, password, 'login');

    axios
      .post(`${ROOT_URL}/api/login`, {
        // withCredentials: false,
        username: username,
        password: password
      })
      .then(() => {
        dispatch({
          type: USER_AUTHENTICATED,
          payload: username
        });
        console.log(history);

        history.push(`/users/listview`);
      })
      .catch(() => {
        dispatch(authError('Incorrect username/password combo'));
      });
  };
};

export const logout = () => {
  return dispatch => {
    axios
      .post(`${ROOT_URL}/api/logout`)
      .then(() => {
        dispatch({
          type: USER_UNAUTHENTICATED
        });
      })
      .catch(() => {
        dispatch(authError('Failed to log you out'));
      });
  };
};

export const getUsers = () => {
  return dispatch => {
    axios
      .get(`${ROOT_URL}/api/users`)
      .then(response => {
        dispatch({
          type: GET_USERS,
          payload: response.data
        });
      })
      .catch(() => {
        dispatch(authError('Failed to fetch users'));
      });
  };
};
