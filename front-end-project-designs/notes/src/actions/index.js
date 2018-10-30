import axios from 'axios';
export const ADD_NOTE='ADD_NOTE';
export const EDIT_NOTE= 'EDIT_NOTE';
export const DELETE_NOTE='DELETE_NOTE';
export const FETCHING_NOTES='FETCHING_NOTE';
export const NOTES_FETCHED='NOTE_FETCHED';
export const NOTES_FETCH_FAIL='NOTE_FETCH_FAIL';

export const fetchNotes= ()=>dispatch=>{
    dispatch({type: FETCHING_NOTES})
    axios
        .get('https://fe-notes.herokuapp.com/note/get/all')
        .then(response => {
            console.log(response);
            dispatch({ type: NOTES_FETCHED, payload: response.data});
          })
          .catch(error => {
            dispatch({ type: NOTES_FETCH_FAIL, payload: error });
          });
};
