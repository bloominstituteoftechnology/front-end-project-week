import axios from 'axios';
const url = 'https://fe-notes.herokuapp.com/';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const FETCH_NOTES_FAILURE = 'FETCH_NOTES_FAILURE';

export const ADDING_NOTE = 'ADDING_NOTE';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';
export const ADD_NOTE_FAILURE = 'ADD_NOTE_FAILURE';

export const SELECTING_NOTE = 'SELECTING_NOTE';
export const SELECT_NOTE_SUCCESS = 'SELECT_NOTE_SUCCESS';
export const SELECT_NOTE_FAILURE = 'SELECT_NOTE_FAILURE';

export const EDITING_NOTE = 'EDITING_NOTE';
export const EDIT_NOTE_SUCCESS = 'EDIT_NOTE_SUCCESS';
export const EDIT_NOTE_FAILURE = 'EDIT_NOTE_FAILURE';

export const DELETING_NOTE = 'DELETING_NOTE';
export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';
export const DELETE_NOTE_FAILURE = 'DELETE_NOTE_FAILURE';

export const fetchNotes = () => dispatch => {
  dispatch({type: FETCHING_NOTES});
  axios
    .get(`${url}note/get/all`)
    .then(res => {
      console.log('notes fetched', res);
      dispatch({type: FETCH_NOTES_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({type: FETCH_NOTES_FAILURE, payload: err});
      console.log(err);
    });
};

export const addNote = note => dispatch => {
  dispatch({type: ADDING_NOTE, payload: note});
};

export const selectNote = id => dispatch => {
  dispatch({type: SELECTING_NOTE, payload: id});
};

export const startEditMode = () => dispatch => {
  dispatch({type: EDITING_NOTE});
};

export const editNote = note => dispatch => {
  dispatch({type: EDIT_NOTE_SUCCESS, payload: note});
};

export const deleteNote = id => dispatch => {
  dispatch({type: DELETING_NOTE, payload: id});
};
