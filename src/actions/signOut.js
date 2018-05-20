// import PropTypes from "prop-types";

export const SIGN_OUT = 'SIGN_OUT';

export const signOut = () => dispatch => {
  localStorage.clear();
  dispatch({ type: SIGN_OUT });
};
