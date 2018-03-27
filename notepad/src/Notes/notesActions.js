import axios from 'axios';

import { SHOW_LOADING, HIDE_LOADING } from '../common/loadingActions';

export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const FETCH_NOTES_ERROR = 'FETCH_NOTES_ERROR';
export const ADD_NOTE = 'ADD_NOTE';
// export const FETCH_NOTES_ERROR = 'FETCH_NOTES_ERROR';

export const getNotes = () => dispatch => {
  dispatch({ type: SHOW_LOADING });
  axios.get('http://localhost:5000/notes').then(response => {
    dispatch({ type: HIDE_LOADING });
    dispatch({ type: FETCH_NOTES_SUCCESS, friends: response.data });
  }).catch(error => {
    dispatch({ type: HIDE_LOADING });
    dispatch({ type: FETCH_NOTES_ERROR, error: error });
  });
};

export const addNote = () => dispatch => {
  dispatch({ type: SHOW_LOADING });
  axios.post('http://localhost:5000/notes').then(response => {
    dispatch({ type: HIDE_LOADING });
    dispatch({ type: ADD_NOTE, note: response.note });
  }).catch(error => {
    console.log('Add failed: ', error);
  });
};
