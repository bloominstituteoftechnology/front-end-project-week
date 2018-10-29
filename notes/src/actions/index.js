import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
const url = 'https://killer-notes.herokuapp.com/note'

export const fetchNotes = () => dispatch => {
    dispatch({ type: FETCHING });
    axios
        .get(`${url}/get/all`)
        .then(response => {
            dispatch({ type: FETCHED, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: error });
        });
}