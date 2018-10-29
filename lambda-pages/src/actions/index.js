import axios from 'axios';

export const GET_ALL_NOTES = 'GET_ALL_NOTES';
export const GET_ALL_NOTES_SUCCESS = 'GET_ALL_NOTES_SUCCESS';
export const GET_ALL_NOTES_FAILURE = 'GET_ALL_NOTES_FAILURE';

export const GET_NOTE = 'GET_NOTE';
export const GET_NOTE_SUCCESS = 'GET_NOTE_SUCCESS';
export const GET_NOTE_FAILURE = 'GET_NOTE_FAILURE';

export const ADD_NOTE = 'ADD_NOTE';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';
export const ADD_NOTE_FAILURE = 'ADD_NOTE_FAILURE';

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

export const addNote = note => dispatch => {
  dispatch({ type: ADD_NOTE });
  axios
    .post('https://fe-notes.herokuapp.com/note/create', note)
    .then(res => {
      dispatch({
        type: ADD_NOTE_SUCCESS,
        payload: { ...note, _id: res.data.success }
      });
    })
    .catch(err => dispatch({ type: ADD_NOTE_FAILURE, payload: err }));
};
