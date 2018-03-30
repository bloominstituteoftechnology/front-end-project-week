import axios from 'axios';

import { SHOW_LOADING, HIDE_LOADING } from '../common/loadingActions';

export const FETCHED = 'FETCHED';
export const ADDED = 'ADDED';
export const UPDATED = 'UPDATED';
export const DELETED = 'DELETED';

export const getNotes = () => dispatch => {
  dispatch({ type: SHOW_LOADING });
  axios.get('http://localhost:5000/notes').then(response => {
    dispatch({ type: HIDE_LOADING });
    dispatch({ type: FETCHED, notes: response.data });
  }).catch(error => {
    dispatch({ type: HIDE_LOADING });
    console.log('Error fetching: ', error);
  });
};

export const addNote = (newNote) => dispatch => {
  dispatch({ type: SHOW_LOADING });
  axios.post('http://localhost:5000/notes', newNote).then(response => {
    dispatch({ type: HIDE_LOADING });
    dispatch({ type: ADDED, notes: response.data });
  }).catch(error => {
    console.log('Add failed: ', error);
  });
};

export const editNote = (id, note) => dispatch => {
  axios.put(`http://localhost:5000/notes/${id}`, note)
    .then(response => {
      dispatch({ type: UPDATED, notes: response.data });
    }).catch(error => {
      console.log('Edit error: ', error);
    });
};

export const deleteNote = id => dispatch => {

  axios.delete(`http://localhost:5000/notes/${id}`)
    .then(response => {
      dispatch({
        type: DELETED,
        notes: response.data
      });
    })
    .catch(error => {
      console.log('Edit error: ', error);
    });
};