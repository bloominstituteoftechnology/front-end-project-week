import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const FETCHED_NOTES = 'FETCHED_NOTES';
export const FETCHED_NOTE = 'FETCHED_NOTE';
export const SET_SEARCHED = 'SET_SEARCHED';
export const ERROR = 'ERROR';

// fetches all notes
export const fetchNotes = URL => {
    const promise = axios.get(`${URL}`);
    return dispatch => {
        dispatch({ type: FETCHING_NOTES });
        promise
            .then(response => {
                dispatch({ type: FETCHED_NOTES, payload: response.data });
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err.message });
            })
    }
}

// fetches requested note for single note view
export const fetchNote = (URL, id) => {
    const promise = axios.get(`${URL}/${id}`);
    return dispatch => {
        dispatch({ type: FETCHING_NOTES });
        promise
            .then(response => {
                dispatch({ type: FETCHED_NOTE, payload: response.data });
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err.message });
            })
    }
}

// post new note to server then routes to single note view
export const createNote = (URL, note) => {
    const promise = axios.post(`${URL}`, note);
    const path = '/notes/';
    return dispatch => {
        dispatch({ type: FETCHING_NOTES });
        promise
            .then(response => {
                console.log(response.data);
                const id = response.data.id;
                window.location.pathname = `${path}${id}`;
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err.message });
            })
    }
}

// deletes note and redirects to root path
export const deleteNote = (URL, id) => {
    const promise = axios.delete(`${URL}/${id}`);
    const path = '/';
    return dispatch => {
        promise
        .then(() => {
            window.location.pathname = path;
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err.message });
        })
    }
}

// edits note then routes to single note view
export const editNote = (URL, id, note) => {
    const promise = axios.put(`${URL}/${id}`, note);
    const path = '/notes/';
    return dispatch => {
        promise
            .then(() => {
                window.location.pathname = `${path}${id}`;
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err.message });
            })
    }
}

export const handleSearch = notes => {
    return {
        type: SET_SEARCHED,
        payload: notes,
    }
}