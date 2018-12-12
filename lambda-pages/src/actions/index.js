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

export const UPDATE_NOTE = 'UPDATE_NOTE';
export const UPDATE_NOTE_SUCCESS = 'UPDATE_NOTE_SUCCESS';
export const UPDATE_NOTE_FAILURE = 'UPDATE_NOTE_FAILURE';

export const DELETE_NOTE = 'DELETE_NOTE';
export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';
export const DELETE_NOTE_FAILURE = 'DELETE_NOTE_FAILURE';

let url;
if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:5000/api/notes';
} else if (process.env.NODE_ENV === 'production') {
  url = 'https://desolate-crag-67758.herokuapp.com/api/notes';
}
const token = localStorage.getItem('auth_token');
const options = {
  headers: {
    authentication: token
  }
};

// GET request
export const getAllNotes = () => dispatch => {
  dispatch({ type: GET_ALL_NOTES });
  axios
    .get(url, options)
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
    .get(`${url}/${id}`)
    .then(res => {
      dispatch({ type: GET_NOTE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_NOTE_FAILURE, payload: err });
    });
};

// POST request
export const addNote = (note, cb) => dispatch => {
  dispatch({ type: ADD_NOTE });
  axios
    .post(url, { ...note, user_id: 1 })
    .then(res => {
      dispatch({
        type: ADD_NOTE_SUCCESS,
        payload: { ...note, id: res.data.id }
      });
    })
    .then(() => {
      if (cb) cb();
    })
    .catch(err => dispatch({ type: ADD_NOTE_FAILURE, payload: err }));
};

// PUT request
export const updateNote = note => dispatch => {
  dispatch({ type: UPDATE_NOTE });
  axios
    .put(`${url}/${note.id}`, note)
    .then(res => {
      dispatch({
        type: UPDATE_NOTE_SUCCESS,
        payload: { ...note }
      });
    })
    .catch(err => dispatch({ type: UPDATE_NOTE_FAILURE, payload: err }));
};

// DELETE request
export const deleteNote = (id, cb) => dispatch => {
  dispatch({ type: DELETE_NOTE });
  axios
    .delete(`${url}/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_NOTE_SUCCESS,
        payload: id
      });
    })
    .then(() => {
      if (cb) cb();
    })
    .catch(err => dispatch({ type: DELETE_NOTE_FAILURE, payload: err }));
};
