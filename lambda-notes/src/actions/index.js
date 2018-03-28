import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const GET_NOTES_ERROR = 'GET_NOTES_ERROR';
export const FETCHED_NOTES = 'FETCHED_NOTES';

// Get request
export const get_notes = () => dispatch => {
    dispatch({ type: FETCHING_NOTES });

    axios
        .get('http://localhost:5000/api/notes')
        .then(response => {
            dispatch({ type: FETCHED_NOTES, notes: response.data });
        })
        .catch(err => {
            dispatch({ type: GET_NOTES_ERROR, errorMessage: 'Error fetching notes'});
        });
};