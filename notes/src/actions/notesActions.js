import axios from 'axios';

export const NOTES_FETCH_START = 'NOTES_FETCH_START';
export const NOTES_FETCH_SUCCESS = 'NOTES_FETCH_SUCCESS';
export const NOTES_FETCH_FAILURE = 'NOTES_FETCH_FAILURE';

export const NOTE_FETCH_START='NOTE_FETCH_START';
export const NOTE_FETCH_SUCCESS='NOTE_FETCH_SUCCESS';
export const NOTE_FETCH_FAILURE='NOTE_FETCH_FAILURE';

export const ADD_NOTE_START = 'ADD_NOTE_START';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';
export const ADD_NOTE_FAILURE = 'ADD_NOTE_FAILURE';

export const DELETE_NOTE_START = 'DELETE_NOTE_START';
export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';
export const DELETE_NOTE_FAILURE = 'DELETE_NOTE_FAILURE';

export const SET_UPDATE_NOTE = 'SET_UPDATE_NOTE';

export const UPDATE_NOTE_START = 'UPDATE_NOTE_START';
export const UPDATE_NOTE_SUCCESS = 'UPDATE_NOTE_SUCCESS';
export const UPDATE_NOTE_FAILURE = 'UPDATE_NOTE_FAILURE';


export const getNotes = () => dispatch => {
    dispatch({ type: NOTES_FETCH_START });
    const promise = axios.get('https://killer-notes.herokuapp.com/note/get/all');

    promise
        .then(response => {
            dispatch({ type: NOTES_FETCH_SUCCESS, payload: response.data });
        })
        .catch(err => {
            dispatch({ type: NOTES_FETCH_FAILURE, payload: err });
        });
};

export const getNote = ()=> dispatch => {
    dispatch({type: NOTE_FETCH_START});
    const promise = axios.get(`https://killer-notes.herokuapp.com/note/get/${noteId}`);

    promise
        .then(response=> {
            dispatch({type: NOTE_FETCH_SUCCESS, payload: response.data});
        })
        .catch(err=> {
            dispatch({type: NOTE_FETCH_FAILURE, payload: err});
        })
};

export const addNewNote = note => dispatch => {
    dispatch({ type: ADD_NOTE_START });

    axios.post('https://killer-notes.herokuapp.com/note/create', note)
        .then(response => {
            dispatch({ type: ADD_NOTE_SUCCESS, payload: response.data });
        }).catch(err => {
            dispatch({ type: ADD_NOTE_FAILURE, payload: err });
        });
};

export const deleteNote = noteId => dispatch => {
    dispatch({ type: DELETE_NOTE_START });

    axios.delete(`https://killer-notes.herokuapp.com/note/delete/${noteId}`)
        .then(response => {
            dispatch({ type: DELETE_NOTE_SUCCESS, payload: response.data });
        })
        .catch(err => {
            dispatch({ type: DELETE_NOTE_FAILURE, payload: err });
        });
};

export const setUpdateNote = id => {
    return {
        type: SET_UPDATE_NOTE,
        payload: id,
    };
};

export const updateNote = note => dispatch => {
    dispatch({ type: UPDATE_NOTE_START });

    axios.put(`https://killer-notes.herokuapp.com/note/edit/${note._id}`, note)
        .then(response => {
            dispatch({ type: UPDATE_NOTE_SUCCESS, payload: response.data });
        })
        .catch(err => {
            dispatch({ type: UPDATE_NOTE_FAILURE, payload: err});
        });
};