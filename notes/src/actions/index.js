import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const ADDED = 'ADDED';
export const UPDATED = 'UPDATED';
const url = 'https://fe-notes.herokuapp.com/note'

export const fetchNotes = () => dispatch => {
    dispatch({ type: FETCHING });
    axios
        .get(`${url}/get/all`)
        .then(response => {
            dispatch({ type: FETCHED, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: error });
        });
}

export const addNote = (newNote) => dispatch => {
    axios
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