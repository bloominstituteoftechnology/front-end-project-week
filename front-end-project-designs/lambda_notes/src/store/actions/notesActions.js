import axios from 'axios';

export const NOTES_FETCH_START = 'NOTES_FETCH_START';
export const NOTES_FETCH_COMPLETE = 'NOTES_FETCH_COMPLETE';
export const NOTES_FETCH_FAILURE = 'NOTES_FETCH_FAILURE';

export const ADD_NOTE_START = 'ADD_NOTE_START';
export const ADD_NOTE_COMPLETE = 'ADD_NOTE_COMPLETE';
export const ADD_NOTE_FAILURE = 'ADD_NOTE_FAILURE';

export const NOTE_GET_START = 'NOTE_GET_START';
export const NOTE_GET_COMPLETE = 'NOTE_GET_COMPLETE';
export const NOTE_GET_FAILURE = 'NOTE_GET_FAILURE';

export const NOTE_EDIT_START = 'NOTE_EDIT_START';
export const NOTE_EDIT_COMPLETE = 'NOTE_EDIT_COMPLETE';
export const NOTE_EDIT_FAILURE = 'NOTE_EDIT_FAILURE';

export const DELETE_NOTE_START = 'DELETE_NOTE_START';
export const DELETE_NOTE_COMPLETE = 'DELETE_NOTE_COMPLETE';
export const DELETE_NOTE_FAILURE = 'DELETE_NOTE_FAILURE';

export const getNoteList = () => dispatch => {
    dispatch({ type: NOTES_FETCH_START });
    const promise = axios.get('https://killer-notes.herokuapp.com/note/get/all');
    promise
        .then(response => {
            dispatch({ type: NOTES_FETCH_COMPLETE, payload: response.data });
        })
        .catch(err => {
            dispatch({ type: NOTES_FETCH_FAILURE, payload: err });
        });
};

export const addNewNote = (note) => dispatch => {
    dispatch({ type: ADD_NOTE_START });

    axios.post('https://killer-notes.herokuapp.com/note/create', note)
        .then(response => {
            dispatch({ type: ADD_NOTE_COMPLETE, payload: response.data });
        }).catch(err => {
            dispatch({ type: ADD_NOTE_FAILURE, payload: err });
        });
}

export const getNote = (id) => dispatch => {
    dispatch({ type: NOTE_GET_START });
    const promise = axios.get(`https://killer-notes.herokuapp.com/note/get/${id}`);
    promise
        .then(response => {
            dispatch({ type: NOTE_GET_COMPLETE, payload: response.data });
            // console.log("got it!");
        })
        .catch(err => {
            dispatch({ type: NOTE_GET_FAILURE, payload: err });
        });
};

export const editNote = (note) => dispatch => {
    dispatch({ type: NOTE_EDIT_START });
    const promise = axios.put(`https://killer-notes.herokuapp.com/note/edit/${note['_id']}`, note);
    promise
        .then(response => {
            // console.log(id);
            dispatch({ type: NOTE_EDIT_COMPLETE, payload: response.data });
            // console.log("got it!");
            
        })
        .catch(err => {
            dispatch({ type: NOTE_EDIT_FAILURE, payload: err });
        });
};

export const deleteNote = (id) => dispatch => {
    dispatch({ type: DELETE_NOTE_START });
    const promise = axios.delete(`https://killer-notes.herokuapp.com/note/delete/${id}`);
    promise
        .then(response => {
            // console.log(id);
            dispatch({ type: DELETE_NOTE_COMPLETE  });
            // console.log("got it!");
        })
        .catch(err => {
            dispatch({ type: DELETE_NOTE_FAILURE, payload: err });
        });
};