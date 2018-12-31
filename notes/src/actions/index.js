// Imports
import axios from 'axios';

// Action Type Exports
export const FETCHING_NOTES = 'FETCHING_NOTES';
export const NOTES_FETCH_SUCCESS = 'NOTES_FETCH_SUCCESS';
export const NOTES_FETCH_FAIL = 'NOTES_FETCH_FAIL';

// Action Creators
export const fetchNotes = () => dispatch => {
    dispatch({
        type: FETCHING_NOTES
    })

    axios
        .get('https://fe-notes.herokuapp.com/note/get/all')
        .then(data => {
            return dispatch({
                type: NOTES_FETCH_SUCCESS,
                payload: data
            });
        })
        .catch(err => {
            return dispatch({
                type: NOTES_FETCH_SUCCESS,
                payload: err
            });
        });
};