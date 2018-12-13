import axios from 'axios';
import { urlLinks } from '../../App';

/***************************************************************************************************
 ********************************************* Variables *******************************************
 **************************************************************************************************/
export const FETCH_NOTES_LOADING = 'FETCH_NOTES_LOADING';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const FETCH_NOTES_FAILURE = 'FETCH_NOTES_FAILURE';

export const FETCH_NOTE_LOADING = 'FETCH_NOTE_LOADING';
export const FETCH_NOTE_SUCCESS = 'FETCH_NOTE_SUCCESS';
export const FETCH_NOTE_FAILURE = 'FETCH_NOTE_FAILURE';

/***************************************************************************************************
 ********************************************** Actions ********************************************
 **************************************************************************************************/
export const getNotes = () => dispatch => {
  dispatch({ type: FETCH_NOTES_LOADING });
  axios
    .get(`${urlLinks.server}${urlLinks.home}${urlLinks.readNotes}`)
    .then(res => {
      dispatch({ type: FETCH_NOTES_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: FETCH_NOTES_FAILURE, payload: err }));
};

export const getNote = id => dispatch => {
  dispatch({ type: FETCH_NOTE_LOADING });
  axios
    .get(`${urlLinks.server}${urlLinks.home}${urlLinks.readNoteServer}/${id}`)
    .then(res => {
      dispatch({ type: FETCH_NOTE_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: FETCH_NOTE_FAILURE, payload: err }));
};
