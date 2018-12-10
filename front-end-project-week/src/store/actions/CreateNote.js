import axios from 'axios';
import { urlLinks } from '../../components/App';

/***************************************************************************************************
 ********************************************* Variables *******************************************
 **************************************************************************************************/
export const ADD_NOTE_LOADING = 'ADD_NOTE_LOADING';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';
export const ADD_NOTE_FAILURE = 'ADD_NOTE_FAILURE';

/***************************************************************************************************
 ********************************************** Actions ********************************************
 **************************************************************************************************/
export const addNote = newNote => dispatch => {
  dispatch({ type: ADD_NOTE_LOADING });
  axios
    .get(`${urlLinks.server}${urlLinks.home}${urlLinks.createNote}`, newNote)
    .then(res => {
      dispatch({ type: ADD_NOTE_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: ADD_NOTE_FAILURE, payload: err }));
};
