import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const FETCHED_NOTES = 'FETCHED_NOTES';
export const FETCHED_NOTE = 'FETCHED_NOTE';
export const SET_NEW = 'SET_NEW';
export const FETCHING_NEW = 'FETCHING_NEW';
export const ERROR = 'ERROR';

// fetches all notes
export const fetchNotes = URL => {
    const promise = axios.get(`${URL}all`);
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

// fetches requested note for single note view
export const fetchNote = (URL, id) => {
    const promise = axios.get(`${URL}get/${id}`);
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

// post new note to server and places on localstorage so it can be view by ViewNote component
export const createNote = (URL, note) => {
    const promise = axios.post(`${URL}create`, note);
    const path = 'http://localhost:3000/note/';
    return dispatch => {
        dispatch({ type: FETCHING_NOTES });
        promise
            .then(response => {
                console.log(response.data);
                const noteId = response.data.success;
                const newNote = {
                    title: note.title,
                    textBody: note.textBody,
                    _id: noteId,
                };
                dispatch({ type: SET_NEW, payload: newNote });
                window.location.href = `${path}${noteId}`;
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err.message });
            })
    }
}

// Gets newly created note from local storage to be displayed by ViewNote component
export const getNew = () => {
    return dispatch => {
        dispatch({ type: FETCHING_NOTES });
        dispatch({ type: FETCHING_NEW, });
    }
}

// deletes note and redirects to root path
export const deleteNote = (URL, id) => {
    const promise = axios.delete(`${URL}delete/${id}`);
    const path = 'http://localhost:3000/';
    return dispatch => {
        promise
        .then(() => {
            window.location.href = path;
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err.message });
        })
    }
}