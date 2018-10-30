// Axios import
import axios from 'axios';
// Action exports
export const FETCH_NOTES = 'FETCH_NOTES';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const FETCH_NOTES_FAILURE = 'FETCH_NOTES_FAILURE';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';
export const ADD_NOTE_FAILURE = 'ADD_NOTE_FAILURE';
export const FETCH_SINGLE_NOTE = 'FETCH_SINGLE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export const fetchNotes = () => dispatch => {
  dispatch({ type: FETCH_NOTES });
  axios
    .get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => {
      dispatch({ type: FETCH_NOTES_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCH_NOTES_FAILURE, payload: error });
    });
};

export const addNote = note => dispatch => {
  axios
    .post('https://fe-notes.herokuapp.com/note/create', note)
    .then(response => {
      note._id = response.data.success;
      dispatch({ type: ADD_NOTE_SUCCESS, payload: note });
    })
    .catch(error => {
      dispatch({ type: ADD_NOTE_FAILURE, payload: error });
    });
};

export const fetchSingleNote = id => dispatch => {
  dispatch({ type: FETCH_NOTES });
  axios
    .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
    .then(response => {
      dispatch({ type: FETCH_SINGLE_NOTE, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCH_NOTES_FAILURE, payload: error });
    });
};

export const deleteNote = id => dispatch => {
  axios
    .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then(response => {
      dispatch({ type: DELETE_NOTE, payload: id });
    })
    .catch(error => {
      dispatch({ type: FETCH_NOTES_FAILURE, payload: error });
    });
};
