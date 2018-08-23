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
export const SET_NOTES = 'SET_NOTES';

export const ERROR = 'ERROR';

export const getNotes = () => {
    if (!axios.defaults.headers.common.authorization) {
        axios.defaults.headers.common = { Authorization: localStorage.getItem('token') }
    }

    const promise = axios.get('https://noteswebapi.herokuapp.com/api/notes');
    return dispatch => {
        dispatch({ type: FETCHING_NOTES });
        promise.then(response => dispatch({ type: NOTES_FETCHED, payload: response.data }))
            .catch(err => dispatch({ type: ERROR, payload: err }));
    }
}

export const getNote = id => {
    const promise = axios.get(`https://noteswebapi.herokuapp.com/api/notes/${id}`);
    return dispatch => {
        dispatch({ type: FETCHING_NOTE });
        promise.then(response => dispatch({ type: NOTE_FETCHED, payload: response.data }))
            .catch(err => dispatch({ type: ERROR, payload: err }));
    }
}

export const addNote = (note, history) => {
    const promise = axios.post('https://noteswebapi.herokuapp.com/api/notes', note);
    return dispatch => {
        dispatch({ type: CREATING_NOTE });
        promise.then(response => {
            history.push('/notes');
            dispatch({ type: NOTE_CREATED, payload: response })
        })
            .catch(err => dispatch({ type: ERROR, payload: err }));
    }
}

export const editNote = (note, history) => {
    const promise = axios.put(`https://noteswebapi.herokuapp.com/api/notes/${note.id}`, note);
    return dispatch => {
        dispatch({ type: EDITING_NOTE });
        promise.then(response => {
            if (history) {
                history.push(`/notes/view/${note.id}`);
            }
            dispatch({ type: NOTE_EDITED, payload: response.data })
        })
            .catch(err => dispatch({ type: ERROR, payload: err }));
    }
}

export const deleteNote = (id, history) => {
    const promise = axios.delete(`https://noteswebapi.herokuapp.com/api/notes/${id}`);
    return dispatch => {
        dispatch({ type: DELETING_NOTE });
        promise.then(() => {
            if (history) {
                history.push('/notes');
            }
            dispatch({ type: NOTE_DELETED, payload: id })
        })
            .catch(err => dispatch({ type: ERROR, payload: err }));
    }
}

export const setNull = () => {
    return {
        type: SET_NULL,
        payload: null
    }
}

export const setNotes = (dragIndex, hoverIndex, dragCard) => {
    return {
        type: SET_NOTES,
        payload: { dragIndex, hoverIndex, dragCard }
    }
}