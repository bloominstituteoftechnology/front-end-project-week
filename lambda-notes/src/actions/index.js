import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const FETCHED_NOTES = 'FETCHED_NOTES';
export const FETCHED_NOTE = 'FETCHED_NOTE';
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

// post new note to server then routes to single note view
export const createNote = (URL, note) => {
    const promise = axios.post(`${URL}create`, note);
    const path = 'http://localhost:3000/note/';
    return dispatch => {
        dispatch({ type: FETCHING_NOTES });
        promise
            .then(response => {
                const id = response.data.success;
                window.location.href = `${path}${id}`;
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err.message });
            })
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

// edits note then routes to single note view
export const editNote = (URL, id, note) => {
    const promise = axios.put(`${URL}edit/${id}`, note);
    const path = 'http://localhost:3000/';
    return dispatch => {
        promise
            .then(() => {
                window.location.href = `${path}note/${id}`;
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err.message });
            })
    }
}