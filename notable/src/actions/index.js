import axios from "axios";

export const ADD_NOTE = "ADD_NOTE";
export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR"

export const addNote = data => {
  return { type: ADD_NOTE, payload: data };
};

export const fetchNotes = () => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(response => {
        dispatch({ type: SUCCESS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: `Problem, ${err}` });
      });
  };
};
