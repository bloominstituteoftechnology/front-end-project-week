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

export const RESET_STORE = 'RESET_STORE';
export const LOGGED_IN = 'LOGGED_IN';

export const ERROR = 'ERROR';


export const fetchNotes = (id, requestOptions) => {
    const getNotes = axios.get(`${process.env.REACT_APP_API_USERS}/${id}/notes`, requestOptions);
    return function(dispatch) {
        dispatch({ type: FETCHING_NOTES });
        getNotes
            .then(response => {
                if (response.data === null) return;
                dispatch({ type: NOTES_FETCHED, payload: response.data });
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err.message });
            });
    }
};

export const addNote = (note, requestOptions) => {
    const postNote = axios.post(`${process.env.REACT_APP_API_NOTES}`, note, requestOptions);
    return function(dispatch) {
        return new Promise((resolve, reject) => {
            dispatch({ type: ADDING_NOTE });
            postNote
                .then(response => {
                    if (response.data === null) return;
                    dispatch({ type: NOTE_ADDED, payload: response.data });
                    resolve();
                })
                .catch(err => {
                    dispatch({ type: ERROR, payload: err.message });
                    reject(err);
                })
        });
    }
};

export const updateNote = (id, note, requestOptions) => {
    const putNote = axios.put(`${process.env.REACT_APP_API_NOTES}/${id}`, note, requestOptions);
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

export const deleteNote = (id, requestOptions) => {
        const delNote = axios.delete(`${process.env.REACT_APP_API_NOTES}/${id}`, requestOptions);
    return function(dispatch) {
        return new Promise((resolve, reject) => {
            dispatch({ type: DELETING_NOTE });
            delNote
                .then(response => {
                    dispatch({ type: NOTE_DELETED, payload: response.data });
                    resolve();
                })
                .catch(err => {
                    dispatch({ type: ERROR, payload: err.message });
                    reject(err);
                })
        });
    }
};

export const setAccount = id => {
    return function (dispatch) {
        dispatch({ type: UPDATING_ACCOUNT });
        dispatch({ type: ACCOUNT_UPDATED, payload: id });
    }
};

export const resetStore = () => {
    return function (dispatch) {
        dispatch({ type: RESET_STORE });
    }
};

export const loggedIn = () => {
    return function (dispatch) {
        dispatch({ type: LOGGED_IN });
    }
};