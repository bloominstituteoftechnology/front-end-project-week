import axios from "axios";

export const FETCH_NOTES = "FETCH_NOTES",
  FETCH_NOTES_SUCCESS = "FETCH_NOTES_SUCCESS",
  FETCH_NOTES_FAILURE = "FETCH_NOTES_FAILURE",
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

export const addNote = note => dispatch => {
  dispatch({ type: ADD_NOTE });
  axios
    .post(`${URL}create/`, note)
    .then(({ data }) => console.log(data))
    .catch(err => console.log(err));
};

export const editNote = note => dispatch => {
  dispatch({ type: EDIT_NOTE });
  axios
    .put(`${URL}edit/${note}/`)
    .then(({ data }) => dispatch({ type: EDIT_NOTE_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: EDIT_NOTE_FAILURE, payload: err }));
};

export const deleteNote = note => dispatch => {
  console.log("FIRING");
  dispatch({ type: DELETE_NOTE });
  axios
    .delete(`${URL}delete/${note}`)
    .then(res => {
      dispatch({ type: DELETE_NOTE_SUCCESS, payload: res });
    })
    .catch(err => dispatch({ type: DELETE_NOTE_FAILURE, payload: err }));
};
