import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const NOTES_FETCHED = 'NOTES_FETCHED';
export const ADDING_NOTE = 'ADDING_NOTE';
export const NOTE_ADDED = 'NOTE_ADDED';
export const UPDATING_NOTE = 'UPDATING_NOTE';
export const NOTE_UPDATED = 'NOTE_UPDATED';
export const DELETING_NOTE = 'DELETING_NOTE';
export const NOTE_DELETED = 'NOTE_DELETED';
export const ERROR = 'ERROR';

export const addNote = (tags, title, textBody) => {
    const promise = axios.post('https://killer-notes.herokuapp.com/note/create', {tags, title, textBody});
    return dispatch => {
        dispatch({type: ADDING_NOTE});
        promise
            .then(response => {
                dispatch({type: NOTE_ADDED, payload: response.data})
            })
            .catch(err => {
                console.log('error', err);
                dispatch({type: ERROR, payload: err})
            })
    }
}

export const getNotes = () => {
    const promise = axios.get('https://killer-notes.herokuapp.com/note/get/all');
    return dispatch => {
        dispatch({type: FETCHING_NOTES});
        promise
            .then(response => {
                dispatch({type: NOTES_FETCHED, payload: response.data})
            })
            .catch(err => {
                console.log('error', err);
                dispatch({type: ERROR, payload: err})
            })
    }
}

export const updateNote = (id, tags, title, textBody) => {
    const promise = axios.put(`https://killer-notes.herokuapp.com/note/edit/${id}`, {tags, title, textBody});
    return dispatch => {
        dispatch({type: UPDATING_NOTE});
        promise
            .then(response => {
                dispatch({type: NOTE_UPDATED, payload: response.data})
            })
            .catch(err => {
                console.log('error', err);
                dispatch({type: ERROR, payload: err})
            })
    }
}

export const deleteNote = (id) => {
    const promise = axios.delete(`https://killer-notes.herokuapp.com/note/delete/${id}`);
    return dispatch => {
        dispatch({type: DELETING_NOTE});
        promise
            .then(response => {
                dispatch({type: NOTE_DELETED, payload: response.data})
            })
            .catch(err => {
                console.log('error', err);
                dispatch({type: ERROR, payload: err})
            })
    }
}