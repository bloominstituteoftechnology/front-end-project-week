import axios from 'axios';

export const FETCH_NOTE_START = 'FETCH_NOTE_START';
export const FETCH_NOTE_SUCCESS = 'FETCH_NOTE_SUCCESS';
export const FETCH_NOTE_FAILURE = 'FETCH_NOTE_FAILURE';


export const ADD_NOTE_START = 'ADD_NOTE_START';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';
export const ADD_NOTE_FAILURE = 'ADD_NOTE_FAILURE';

export const EDIT_NOTE_START = 'EDIT_NOTE_START';
export const EDIT_NOTE_SUCCESS = 'EDIT_NOTE_SUCCESS';
export const EDIT_NOTE_FAILURE = 'EDIT_NOTE_FAILURE';

const url = 'https://fe-notes.herokuapp.com/note/';

export const fetchNotes = () => dispatch => {
    dispatch({ type: FETCH_NOTE_START })
    axios
        .get(`${url}get/all`)
        .then(response => {
            dispatch({ type: FETCH_NOTE_SUCCESS, payload: response.data })
        })
        .catch(error => {
            dispatch({ type: FETCH_NOTE_FAILURE, payload: error })
        });
}

export const addNote = note => dispatch => {
    dispatch({ type: ADD_NOTE_START })
    axios
        .post(`${url}create`, note)
        .then(() => {
            dispatch({ type: ADD_NOTE_SUCCESS })
        })
        .catch(error => {
            dispatch({ type: ADD_NOTE_FAILURE, payload: error })
        });
}

export const editNote = (noteData, id) => dispatch => {
    dispatch({ type: EDIT_NOTE_START })
    axios
        .put(`${url}edit/${id}`, noteData)
        .then(() => {
            dispatch({ type: EDIT_NOTE_SUCCESS })
        })
        .catch(error => {
            dispatch({ type: EDIT_NOTE_FAILURE, payload: error })
        });
}