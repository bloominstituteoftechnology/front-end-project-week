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
  DELETE_NOTE_FAILURE = "DELETE_NOTE_FAILURE",
  FILTER_NOTES = "FILTER_NOTES",
  SORT_NOTES = "SORT_NOTES";

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
    .post(`${URL}create`, note)
    .then(({ data }) =>
      dispatch({
        type: ADD_NOTE_SUCCESS,
        payload: { ...note, tags: note.tags, _id: data.success }
      })
    )
    .catch(err => dispatch({ type: ADD_NOTE_FAILURE, payload: err }));
};

export const editNote = note => dispatch => {
  dispatch({ type: EDIT_NOTE });
  axios
    .put(`${URL}edit/${note._id}/`, note)
    .then(({ data }) =>
      dispatch({
        type: EDIT_NOTE_SUCCESS,
        payload: data
      })
    )
    .catch(err => dispatch({ type: EDIT_NOTE_FAILURE, payload: err }));
};

export const deleteNote = note => dispatch => {
  dispatch({ type: DELETE_NOTE });
  axios
    .delete(`${URL}delete/${note}`)
    .then(() => {
      dispatch({ type: DELETE_NOTE_SUCCESS, payload: note });
    })
    .catch(err => dispatch({ type: DELETE_NOTE_FAILURE, payload: err }));
};

export const filterNotes = filterState => dispatch => {
  dispatch({ type: FILTER_NOTES, payload: filterState });
};

export const sortNotes = type => dispatch => {
  dispatch({ type: SORT_NOTES, payload: type });
};
