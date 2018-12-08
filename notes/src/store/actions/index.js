import axios from 'axios';

// actions types
export const NOTES_REQUEST = 'NOTES_REQUEST';
export const NOTES_SUCCESS = 'NOTES_SUCCESS';

export const NOTE_REQUEST = 'NOTE_REQUEST';
export const NOTE_SUCCESS = 'NOTE_SUCCESS';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_SUCCESS = 'POST_SUCCESS';

export const PUT_REQUEST = 'PUT_REQUEST';
export const PUT_SUCCESS = 'PUT_SUCCESS';

export const DELETE_REQUEST = 'DELETE_REQUEST';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';

export const REQUEST_ERROR = 'REQUEST_ERROR';

const BASE_URL = 'https://fe-notes.herokuapp.com/note';

// actions creators
export const getNotes = () => dispatch => {
  dispatch({ type: NOTES_REQUEST });

  axios
    .get(`${BASE_URL}/get/all`)
    .then( res => {
      dispatch({type: NOTES_SUCCESS, payload: res.data})
    })
    .catch( err => {
      dispatch({type: REQUEST_ERROR, payload: err})
    })
}

export const getNote = (_id) => dispatch => {
  dispatch({ type: NOTE_REQUEST });

  axios
    .get(`${BASE_URL}/get/${_id}`)
    .then( res => {
      dispatch({type: NOTE_SUCCESS, payload: {
        note: res.data
      }})
    })
    .catch( err => {
      dispatch({type: REQUEST_ERROR, payload: err})
    })
}

export const addNote = (note) => dispatch => {
  dispatch({ type: POST_REQUEST });

  axios
  .post(`${BASE_URL}/create`, note)
  .then( res => {
    dispatch({
      type: POST_SUCCESS,
      payload: {
        ...note,
        "_id": res.data.success
      }});
  })
  .catch( err => {
    dispatch({type: REQUEST_ERROR, payload: err})
  })
}

export const updateNote = (note, _id) => dispatch => {
  dispatch({ type: PUT_REQUEST });

  axios
  .put(`${BASE_URL}/edit/${_id}`, note)
  .then( res => {
    console.log(res);
    dispatch({
      type: PUT_SUCCESS,
      payload: {
        note: res.data,
      }});
  })
  .catch( err => {
    dispatch({type: REQUEST_ERROR, payload: err})
  })
}

export const deleteNote = (_id) => dispatch => {
  dispatch({ type: DELETE_REQUEST });

  axios
  .delete(`${BASE_URL}/delete/${_id}`)
  .then( res => {
    dispatch({
      type: DELETE_SUCCESS,
      payload: {
        "_id": _id,
      }});
  })
  .catch( err => {
    dispatch({type: REQUEST_ERROR, payload: err})
  })
}

