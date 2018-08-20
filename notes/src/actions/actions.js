import axios from 'axios';

export const fetchingNotes = 'FETCHING_NOTES';
export const fetchedNotes = 'FETCHED_NOTES';
export const ERRORS = 'ERRORS';
const url = "https://killer-notes.herokuapp.com/note";

export const fetchNotes = () => {
    return dispatch => {
        dispatch({type: FETCHING_NOTES});
        axios
            .get(`${url}/get/all`)
            .then( response => {
                dispatch({type: FETCHED_NOTES, payload: response.data})
            })
            .catch (err => {dispatch({type: ERRORS, payload: err})});
    }

}