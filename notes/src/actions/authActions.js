import axios from "axios";
const URL = "http://localhost:5002/";

export const REGISTER = "REGISTER";
export const SIGNIN = "SIGNIN";
export const ERROR = "ERROR";

export const registerUser = () => {
  return dispatch => {
    axios
      .get(`${URL}api/auth/register`)
      .then(res => {
        dispatch({ type: REGISTER, payload: res.datas });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
