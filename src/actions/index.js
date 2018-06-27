import axios from "axios";

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const NOTES_FETCHED = 'NOTES_FETCHED';

export const ADDING_NOTE = 'ADDING_NOTE';
export const NOTE_ADDED = 'NOTE_ADDED';

export const UPDATING_NOTE = 'UPDATING_NOTE';
export const NOTE_UPDATED = 'NOTE_UPDATED';

export const DELETING_NOTE = 'DELETING_NOTE';
export const NOTE_DELETED = 'NOTE_DELETED';

export const UPDATING_ACCOUNT = 'UPDATING_ACCOUNT';
export const ACCOUNT_UPDATED = 'ACCOUNT_UPDATED';

export const ERROR = 'ERROR';


export const fetchNotes = id => {
    const getNotes = axios.get(`${process.env.REACT_APP_API_USERS}/${id}/notes`);
    return function(dispatch) {
        dispatch({ type: FETCHING_NOTES });
        getNotes
            .then(response => {
                dispatch({ type: NOTES_FETCHED, payload: response.data });
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err.message });
            });
    }
}

export const addNote = note => {
    const postNote = axios.post(`${process.env.REACT_APP_API_NOTES}`, note);
    return function(dispatch) {
        dispatch({ type: ADDING_NOTE });
        postNote
            .then(response => {
                dispatch({ type: NOTE_ADDED, payload: response.data });  
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err.message });
            });
    }
};

export const updateNote = (id, note) => {
    const putNote = axios.put(`${process.env.REACT_APP_API_NOTES}/${id}`, note);
    return function(dispatch) {
        dispatch({ type: UPDATING_NOTE });
        putNote
            .then(response => {
                dispatch({ type: NOTE_UPDATED, payload: response.data });
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err.message });
            });
    }
};

export const deleteNote = id => {
        const delNote = axios.put(`${process.env.REACT_APP_API_NOTES}/${id}`);
    return function(dispatch) {
        dispatch({ type: DELETING_NOTE });
        delNote
            .then(response => {
                dispatch({ type: NOTE_DELETED, payload: response.data });
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err.message });
            });
    }
};

export const setAccount = email => {
    return function (dispatch) {
        dispatch({ type: UPDATING_ACCOUNT });
        dispatch({ type: ACCOUNT_UPDATED, payload: email });
    }
}