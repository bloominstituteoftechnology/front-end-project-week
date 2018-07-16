import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const FETCHED_NOTES = 'FETCHED_NOTES';
export const FETCHED_NOTE = 'FETCHED_NOTE';
export const ERROR = 'ERROR';

export const fetchNotes = URL => {
    const promise = axios.get(URL + 'all');
    return dispatch => {
        dispatch({ type: FETCHING_NOTES });
        promise
            .then(response => {
                dispatch({ type: FETCHED_NOTES, payload: response.data });
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err });
            })
    }
}

export const fetchNote = (URL, id) => {
    const promise = axios.get(URL + id);
    return dispatch => {
        dispatch({ type: FETCHING_NOTES });
    promise
        .then(response => {
            console.log(response);
            dispatch({ type: FETCHED_NOTE, payload: response.data });
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err.message });
        })
    }
}