import axios from 'axios';

export const FETCHING_NOTES = "FETCHING_NOTES";
export const FETCHING_NOTES_SUCCESSFUL = "FETCHING_NOTES_SUCCESSFUL";
export const FETCHING_NOTES_FAILURE = "FETCHING_NOTES_FAILURE";

export const getNotes = () => {
  return dispatch => {
    dispatch({type: FETCHING_NOTES});
    axios
      .get('https://killer-notes.herokuapp.com/note/get/all')
      .then(resp => dispatch({type: FETCHING_NOTES_SUCCESSFUL, payload: resp.data}))
      .catch(err => dispatch({type: FETCHING_NOTES_FAILURE, payload: new Error(err)}));
  }
}