import axios from 'axios';
export const FETCHING_DATA = 'FETCHING_DATA';
export const DATA_FETCHED = 'DATA_FETCHED';
export const FETCH_ERROR = 'FETCH_ERROR';
export const INITIALIZE_NOTE_ADD = 'INITIALIZE_NOTE_ADD';
export const COMPLETE_NOTE_ADD = 'COMPLETE_NOTE_ADD';
export const ADD_NOTE_ERROR = 'ADD_NOTE_ERROR';
export const DISPLAY_UPDATE_FORM = 'DISPLAY_UPDATE_FORM';
export const UPDATING_NOTE = 'UPDATING_NOTE';
export const UPDATED_NOTE = 'UPDATED_NOTE';
export const UPDATE_ERROR = 'UPDATE_ERROR';

export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: FETCHING_DATA });
    axios
      .get('https://killer-notes.herokuapp.com/note/get/all')
      .then((response) => {
        dispatch({ type: DATA_FETCHED, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: FETCH_ERROR });
      });
  };
};

export const addNote = (newNote) => {
  return (dispatch) => {
    dispatch({ type: INITIALIZE_NOTE_ADD });
    axios 
      .post('https://killer-notes.herokuapp.com/note/create', newNote)
      .then((response) => {
        fetchData();
        dispatch({ type: COMPLETE_NOTE_ADD, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: ADD_NOTE_ERROR });
      });
  };
};