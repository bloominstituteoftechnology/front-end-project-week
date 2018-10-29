import axios from 'axios';

export const GET_ALL_NOTES = 'GET_ALL_NOTES';
export const GET_ALL_NOTES_SUCCESS = 'GET_ALL_NOTES_SUCCESS';
export const GET_ALL_NOTES_FAILURE = 'GET_ALL_NOTES_FAILURE';

export const GET_NOTE = 'GET_NOTE';
export const GET_NOTE_SUCCESS = 'GET_NOTE_SUCCESS';
export const GET_NOTE_FAILURE = 'GET_NOTE_FAILURE';

// GET request
export const getAllNotes = () => dispatch => {
  dispatch({ type: GET_ALL_NOTES });
  axios
    .get('https://fe-notes.herokuapp.com/note/get/all')
    .then(res => {
      dispatch({ type: GET_ALL_NOTES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_NOTES_FAILURE, payload: err });
    });
};

// GET request for single note
export const getNote = id => dispatch => {
  dispatch({ type: GET_NOTE });
  axios
    .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
    .then(res => {
      dispatch({ type: GET_NOTE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_NOTE_FAILURE, payload: err });
    });
};
