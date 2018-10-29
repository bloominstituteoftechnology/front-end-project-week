import axios from 'axios';

export const ERROR = 'ERROR';
export const GETTING_NOTES = 'GETTING_NOTES';
export const NOTE_SUCCESS = 'NOTE_SUCCESS';

export const getNotes = () => dispatch => {
    dispatch( {type: GETTING_NOTES } );
    axios
    .get('https://killer-notes.herokuapp.com/note/get/all')
    .then( response => {
        console.log('response', response);
        dispatch({ type: NOTE_SUCCESS, payload: response.data });
    })
    .catch(error => {
        dispatch({ type: ERROR, payload: error });
    })
}