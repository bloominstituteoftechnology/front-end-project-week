import axios from "axios";

export const FETCHING_NOTES = "FETCHING_NOTES";
export const NOTES_FETCHED = "NOTES_FETCHED";
export const SAVING_NOTES = "SAVING_NOTES";
export const NOTES_SAVED = "NOTES_SAVED";
export const DELETING_NOTE = "DELETING_NOTE";
export const NOTE_DELETED = "NOTE_DELETED";
export const UPDATING_NOTE = "UPDATING_NOTE";
export const NOTE_UPDATED = "NOTE_UPDATED";
export const ERROR = "ERROR";

export const getNotes = () => {
    const receiveNotes = axios.get('http://localhost:5000/api/notes');
    return function (dispatch) {
        dispatch({ type: FETCHING_NOTES });
        receiveNotes
            .then(response => dispatch({ type: NOTES_FETCHED, payload: response.data }))
            .catch(err => dispatch({ type: ERROR, payload: err }))
    }
}

export const addNote = (obj) => {
    const createNote = axios.post('http://localhost:5000/api/notes', obj);
    return function (dispatch) {
        dispatch({ type: SAVING_NOTES });
        createNote
            .then(response => dispatch({ type: NOTES_SAVED, payload: response.data }))
            .catch(err => dispatch({ type: ERROR, payload: err }))
    }
}

export const deleteNote = (id) => {
    const removeNote = axios.delete(`http://localhost:5000/api/notes/${id}`)
    return function (dispatch) {
        dispatch({ type: DELETING_NOTE });
        removeNote
            .then(response => dispatch({ type: NOTE_DELETED, payload: response.data }))
            .catch(err => dispatch({ type: ERROR, payload: err }))
    }
}

export const updateNote = (id, obj) => {
    const modifyNote = axios.put(`http://localhost:5000/api/notes/${id}`, obj)
    return function (dispatch) {
        dispatch({ type: UPDATING_NOTE });
        modifyNote
            .then(response => dispatch({ type: NOTE_UPDATED, payload: response.data }))
            .catch(err => dispatch({ type: ERROR, payload: err }))
    }
}
