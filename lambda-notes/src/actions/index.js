import axios from 'axios';

export const FETCHING_DATA = 'FETCHING_DATA';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_ERROR = 'DATA_ERROR';
export const ADD_NOTE = 'ADD_NOTE';
export const ADDED_SUCCESS = 'ADDED_SUCCESS';
export const GET_NOTE = 'GET_NOTE';
export const GET_NOTE_SUCCESS = 'GET_NOTE_SUCCESS';
export const EDIT_NOTE = 'EDIT_NOTE';
export const EDIT_NOTE_SUCCESS = 'EDIT_NOTE_SUCCESS';
export const DELETE_NOTE = 'DELETE_NOTE';
export const NOTE_DELETED = 'NOTE_DELETED';

const URL = 'https://laurens-lambda-notes-api.herokuapp.com/api/notes';

export const fetchNotes = () => dispatch => {
  dispatch({ type: FETCHING_DATA });
  axios
    .get(URL)
    .then(response => {
      console.log(response);
      dispatch({ type: DATA_SUCCESS, results: response.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DATA_ERROR, error: err });
    });
};

export const addNote = note => dispatch => {
  dispatch({ type: ADD_NOTE });
  axios
    .post(URL, note)
    .then(response => {
      dispatch({ type: ADDED_SUCCESS });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getNote = id => dispatch => {
  dispatch({ type: GET_NOTE });
  axios.get(`${URL}/${id}`).then(response => {
    console.log(response);
    dispatch({ type: GET_NOTE_SUCCESS, result: response.data });
  });
};

export const editNote = (id, note) => dispatch => {
  dispatch({ type: EDIT_NOTE });
  axios.put(`${URL}/${id}`, note).then(response => {
    dispatch({ type: EDIT_NOTE_SUCCESS, result: response.data });
  });
};

export const deleteNote = id => dispatch => {
  dispatch({ type: DELETE_NOTE });
  axios.delete(`${URL}/${id}`).then(response => {
    dispatch({ type: NOTE_DELETED });
  });
};
