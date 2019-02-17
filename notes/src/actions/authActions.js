import axios from "axios";
import setJWT from "../utils/setJWT";
import jwt from "jsonwebtoken";
import URL from "../utils/URL";

export const REGISTER = "REGISTER";
export const SIGNIN = "SIGNIN";
export const ERROR = "ERROR";
export const SET_CURR_USER = "SET_CURR_USER";
export const LOGOUT = "LOGOUT";

export const setCurrUser = user => {
  return { type: SET_CURR_USER, payload: user };
};

export const registerUser = user => {
  return dispatch => {
    axios
      .post(`${URL}api/auth/register`, { ...user })
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
      .post(`${URL}api/auth/login`, { user: { ...user } })
      .then(res => {
        const token = res.data.token;
        localStorage.setItem("notes_jwt", token);
        setJWT(token);
        dispatch(setCurrUser(jwt.decode(token)));
        dispatch({ type: SIGNIN, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const logout = () => {
  return dispatch => {
    localStorage.removeItem("notes_jwt");
    dispatch({ type: LOGOUT });
  };
};
