import axios from 'axios';

export const ERROR = 'ERROR';
export const ADD_NOTES = 'ADD_NOTES';
export const DELETE_NOTE = 'DELETE_NOTE';

export const addNote = note => dispatch => {
    dispatch({type: ADD_NOTES });
    axios
      .post('http://localhost:3333/note', { ...note })
      .then(response => { dispatch({ type: ADD_NOTES }) })
      .catch(err => { dispatch({ type: ERROR, errorMessage: 'Error occured while adding note' }) })
  };