import axios from 'axios';
import { urlLinks } from '../../components/App';

/***************************************************************************************************
 ********************************************* Variables *******************************************
 **************************************************************************************************/
export const DELETE_NOTE_LOADING = 'DELETE_NOTE_LOADING';
export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';
export const DELETE_NOTE_FAILURE = 'DELETE_NOTE_FAILURE';

/***************************************************************************************************
 ********************************************** Actions ********************************************
 **************************************************************************************************/
export const deleteNote = id => dispatch => {
  dispatch({ type: DELETE_NOTE_LOADING });
  axios
    .delete(`${urlLinks.server}${urlLinks.home}${urlLinks.deleteNote}/${id}`)
    .then(res => {
      dispatch({ type: DELETE_NOTE_SUCCESS });
    })
    .catch(err => dispatch({ type: DELETE_NOTE_FAILURE, payload: err }));
};
