import axios from 'axios';

// NOTE TYPES
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

// AUTH TYPES
export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

let url;
if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:5000/api/notes';
} else if (process.env.NODE_ENV === 'production') {
  url = 'https://desolate-crag-67758.herokuapp.com/api/notes';
}

// function authenticate() {
const token = localStorage.getItem('auth_token');
const options = {
  headers: {
    authentication: token
  }
};
// }

// Register POST request
export const registerUser = user => dispatch => {
  dispatch({ type: REGISTER_USER });
  axios
    .post('http://localhost:5000/api/auth/register', user)
    .then(res => {
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: 'Registered! Please login.'
      });
    })
    .catch(err => {
      dispatch({ type: GET_ALL_NOTES_FAILURE, payload: err });
    });
};

// Login POST request
export const loginUser = (user, cb) => dispatch => {
  dispatch({ type: LOGIN });
  axios
    .post('http://localhost:5000/api/auth/login', user)
    .then(res => {
      localStorage.setItem('auth_token', res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: 'Login successful' });
    })
    .then(() => {
      if (cb) cb();
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message });
    });
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
    .get(`${url}/${id}`, options)
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
