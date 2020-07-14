import { auth, googleAuth } from "../config/fire";
import { FETCH_USER, FETCHING_USER, ERROR } from "../actionTypes/actionTypes";

export const googleLogin = () => {
  return dispatch => auth.signInWithPopup(googleAuth);
}

export const getUser = () => {
  return dispatch => {
    auth.onAuthStateChanged(user => {
      console.log(user);
      dispatch({
        type: FETCH_USER,
        payload: user
      });
    })
  }
}

export const logout = () => {
  return dispatch => auth.signOut();
}