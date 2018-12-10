import axios from 'axios';
export const GET_ALL_NOTES = 'GET_ALL_NOTES';
export const GET_ALL_NOTES_SUCCESS = 'GET_ALL_NOTES_SUCCESS';
export const GET_ALL_NOTES_FAILURE = 'GET_ALL_NOTES_FAILURE';

export const getAllNotes = () => dispatch => { dispatch({ type: GET_ALL_NOTES });
 axios
   .get('https://fe-notes.herokuapp.com/note/get/all')
   .then(res => {
     dispatch({ type: GET_ALL_NOTES_SUCCESS, payload: res.data });
   })
   .catch(err => {
     dispatch({ type: GET_ALL_NOTES_FAILURE, payload: err });
   });
};