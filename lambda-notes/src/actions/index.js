import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const NOTES_FETCHED = 'NOTES_FETCHED';

export const CREATING_NOTE = 'CREATING_NOTE';
export const NOTE_CREATED = 'NOTE_CREATED';

export const ERROR = 'ERROR';

export const getNotes = () => {
    const promise = axios.get('https://killer-notes.herokuapp.com/note/get/all');
    return dispatch => {
        dispatch({ type: FETCHING_NOTES });
        promise.then(response => dispatch({ type: NOTES_FETCHED, payload: response.data }))
            .catch(err => dispatch({ type: ERROR, payload: err }));
    }
}

export const addNote = note => {
    const promise = axios.post('https://killer-notes.herokuapp.com/note/create/', note);
    return dispatch => {
        dispatch({ type: CREATING_NOTE });
        promise.then(dispatch({ type: NOTE_CREATED, payload: note }))
            .catch(err => dispatch({ type: ERROR, payload: err }));
    }
}