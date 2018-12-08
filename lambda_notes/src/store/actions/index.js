import axios from "axios";

export const FETCH_NOTES = "FETCH_NOTES",
  FETCH_NOTES_SUCCESS = "FETCH_NOTES_SUCCESS",
  FETCH_NOTES_FAILURE = "FETCH_NOTES_FAILURE",
  FETCH_SINGLE_NOTE = "FETCH_SINGLE_NOTE",
  FETCH_SINGLE_NOTE_SUCCESS = "FETCH_SINGLE_NOTE_SUCCESS",
  FETCH_SINGLE_NOTE_FAILURE = "FETCH_SINGLE_NOTE_FAILURE",
  ADD_NOTE = "ADD_NOTE",
  ADD_NOTE_SUCCESS = "ADD_NOTE_SUCCESS",
  ADD_NOTE_FAILURE = "ADD_NOTE_FAILURE",
  EDIT_NOTE = "EDIT_NOTE",
  EDIT_NOTE_SUCCESS = "EDIT_NOTE_SUCCESS",
  EDIT_NOTE_FAILURE = "EDIT_NOTE_FAILURE",
  DELETE_NOTE = "DELETE_NOTE",
  DELETE_NOTE_SUCCESS = "DELETE_NOTE_SUCCESS",
  DELETE_NOTE_FAILURE = "DELETE_NOTE_FAILURE";

const URL = "https://fe-notes.herokuapp.com/note/";

export const getNotes = () => dispatch => {
  dispatch({ type: FETCH_NOTES });
  axios
    .get(`${URL}get/all/`)
    .then(({ data }) => dispatch({ type: FETCH_NOTES_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: FETCH_NOTES_FAILURE, payload: err }));
};

export const getSingleNote = note => dispatch => {
  dispatch({ type: FETCH_SINGLE_NOTE });
  axios
    .get(`${URL}${note}/`)
    .then(({ data }) =>
      dispatch({ type: FETCH_SINGLE_NOTE_SUCCESS, payload: data })
    )
    .catch(err => dispatch({ type: FETCH_SINGLE_NOTE_FAILURE, payload: err }));
};

export const addNote = () => dispatch => {
  dispatch({ type: ADD_NOTE });
  axios
    .post(`${URL}create/`)
    .then(({ data }) => dispatch({ type: ADD_NOTE_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: ADD_NOTE_FAILURE, payload: err }));
};

export const editNote = note => dispatch => {
  dispatch({ type: EDIT_NOTE });
  axios
    .put(`${URL}${note}/`)
    .then(({ data }) => dispatch({ type: EDIT_NOTE_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: EDIT_NOTE_FAILURE, payload: err }));
};

export const deleteNote = note => dispatch => {
  dispatch({ type: DELETE_NOTE });
  axios
    .delete(`${URL}delete/${note}/`)
    .then(({ data }) => dispatch({ type: DELETE_NOTE_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: DELETE_NOTE_FAILURE, payload: err }));
};
