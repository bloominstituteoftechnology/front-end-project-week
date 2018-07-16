import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const NOTES_FETCHED = 'NOTES_FETCHED';

export const FETCHING_NOTE = 'FETCHING_NOTE';
export const NOTE_FETCHED = 'NOTE_FETCHED';

export const CREATING_NOTE = 'CREATING_NOTE';
export const NOTE_CREATED = 'NOTE_CREATED';

export const EDITING_NOTE = 'EDITING_NOTE';
export const NOTE_EDITED = 'NOTE_EDITED';

export const DELETING_NOTE = 'DELETING_NOTE';
export const NOTE_DELETED = 'NOTE_DELETED';

export const SET_NULL = 'SET_NULL';

export const ERROR = 'ERROR';


export const getNotes = () => {
    const promise = axios.get('https://killer-notes.herokuapp.com/note/get/all');
    return dispatch => {
        dispatch({ type: FETCHING_NOTES });
        promise.then(response => dispatch({ type: NOTES_FETCHED, payload: response.data }))
            .catch(err => dispatch({ type: ERROR, payload: err }));
    }
}

export const getNote = id => {
    const promise = axios.get(`https://killer-notes.herokuapp.com/note/get/${id}`);
    return dispatch => {
        dispatch({ type: FETCHING_NOTE });
        promise.then(response => dispatch({ type: NOTE_FETCHED, payload: response.data }))
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

export const editNote = note => {
    const promise = axios.put(`https://killer-notes.herokuapp.com/note/edit/${note.id}`, note);
    return dispatch => {
        dispatch({ type: EDITING_NOTE });
        promise.then(response => dispatch({ type: NOTE_EDITED, payload: response.data }))
            .catch(err => dispatch({ type: ERROR, payload: err }));
    }
}

export const deleteNote = id => {
    const promise = axios.delete(`https://killer-notes.herokuapp.com/note/delete/${id}`);
    return dispatch => {
        dispatch({ type: DELETING_NOTE });
        promise.then(dispatch({ type: NOTE_DELETED, payload: id }))
            .catch(err => dispatch({ type: ERROR, payload: err }));
    }
}

export const setNull = () => {
    return {
        type: SET_NULL,
        payload: null
    }
}