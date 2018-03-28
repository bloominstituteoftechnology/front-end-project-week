// import PropTypes from "prop-types";

export const ADD_NEW_NOTE = "ADD_NEW_NOTE";

export const addNote = data => {
  return {
    type: ADD_NEW_NOTE,
    payload: data
  };
};
