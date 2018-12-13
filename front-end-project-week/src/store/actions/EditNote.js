import axios from 'axios';
import { urlLinks } from '../../App';

/***************************************************************************************************
 ********************************************* Variables *******************************************
 **************************************************************************************************/
export const EDIT_NOTE_LOADING = 'EDIT_NOTE_LOADING';
export const EDIT_NOTE_SUCCESS = 'EDIT_NOTE_SUCCESS';
export const EDIT_NOTE_FAILURE = 'EDIT_NOTE_FAILURE';

/***************************************************************************************************
 ********************************************** Actions ********************************************
 **************************************************************************************************/
export const editNote = (id, newNote) => dispatch => {
  dispatch({ type: EDIT_NOTE_LOADING });
  axios
    .put(
      `${urlLinks.server}${urlLinks.home}${urlLinks.editNoteServer}/${id}`,
      newNote
    )
    .then(res => {
      dispatch({ type: EDIT_NOTE_SUCCESS });
    })
    .catch(err => dispatch({ type: EDIT_NOTE_FAILURE, payload: err }));
};
