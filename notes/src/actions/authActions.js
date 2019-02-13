import axios from "axios";
const URL = "http://localhost:5002/";

export const REGISTER = "REGISTER";
export const SIGNIN = "SIGNIN";
export const ERROR = "ERROR";

export const registerUser = user => {
  return dispatch => {
    axios
      .post(`${URL}api/auth/register`, user)
      .then(res => {
        dispatch({ type: REGISTER, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const loginUser = user => {
  return dispatch => {
    axios
      .post(`${URL}api/auth/login`, user)
      .then(res => {
        dispatch({ type: SIGNIN, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
