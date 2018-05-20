import axios from 'axios';
import { LOGIN } from './login';

export const authorize = data => dispatch => {
  axios
    .get('https://ajlnbe.herokuapp.com/api/login', data)
    .then(response => {
      dispatch({ type: LOGIN, payload: response.data.user });
      // this.props.authorize(user);
    })
    .catch(err => dispatch({ type: 'ERROR', payload: err }));
};
