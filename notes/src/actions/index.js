import axios from 'axios';

export const NOTES_FETCHING = 'NOTES_FETCHING';
export const NOTES_FETCH_SUCCESS = 'NOTES_FETCH_SUCCESS';
export const NOTES_FETCH_FAILURE = 'NOTES_FETCH_FAILURE';

export const getNotes = () => dispatch => {
    dispatch({ type: NOTES_FETCHING });
    axios
        .get('https://fe-notes.herokuapp.com/note/get/all')
        .then(response => {
            console.log(response);
            dispatch({ type: NOTES_FETCH_SUCCESS, payload: response.data })
        })
        .catch(err => dispatch({ type: NOTES_FETCH_FAILURE, payload: err }));
}