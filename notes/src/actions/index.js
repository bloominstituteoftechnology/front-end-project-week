import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHALL = 'FETCHALL';
export const FETCHONE = 'FETCHONE'
export const ERROR = 'ERROR';
export const ADDED = 'ADDED';
export const UPDATED = 'UPDATED';
export const DELETED = 'DELETED';
const url = 'https://fe-notes.herokuapp.com/note'

export const fetchNotes = () => dispatch => {
    dispatch({ type: FETCHING });
    axios
        .get(`${url}/get/all`)
        .then(response => {
            dispatch({ type: FETCHALL, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: error });
        });
}

export const fetchNote = (id) => dispatch => {
    dispatch({ type: FETCHING });
    return axios
        .get(`${url}/get/${id}`)
        .then(response => {
            dispatch({ type: FETCHONE, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: error });
        });
}

export const addNote = (newNote) => dispatch => {
    return axios
        .post(`${url}/create`, newNote)
        .then(response => {
            dispatch({ type: ADDED, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: error });
        });
};

export const updateNote = (editedNote) => dispatch => {
    axios
        .put(`${url}/edit/${editedNote.id}`, editedNote)
        .then(response => {
            dispatch({ type: UPDATED, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: error });
        });
};

export const deleteNote = (id) => dispatch => {
    return axios
        .delete(`${url}/delete/${id}`)
        .then(response => {
            dispatch({ type: DELETED, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: error });
        });
};