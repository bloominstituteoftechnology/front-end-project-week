import axios from 'axios';

export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const ADD_NOTE_START = 'ADD_NOTE_START';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';
export const ADD_NOTE_FAILURE = 'ADD_NOTE_FAILURE';

export const EDIT_NOTE_START = 'EDIT_NOTE_START';
export const EDIT_NOTE_SUCCESS = 'EDIT_NOTE_SUCCESS';
export const EDIT_NOTE_FAILURE = 'EDIT_NOTE_FAILURE';

export const DELETE_NOTE_START = 'DELETE_NOTE_START';
export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';
export const DELETE_NOTE_FAILURE = 'DELETE_NOTE_FAILURE';

export const fetchNotes = () => dispatch => {
    dispatch({ type: FETCHING_START });
    axios
        .get('https://fe-notes.herokuapp.com/note/get/all')
        .then(res => {
            // console.log(res);
            dispatch({ type: FETCHING_SUCCESS, payload: res.data});
        })
        .catch(err => {
            // console.log(err);
            dispatch({ type: FETCHING_FAILURE, payload: err});
        });
};

export const addNote = (title, text) => dispatch => {
    dispatch({ type: ADD_NOTE_START });
    axios
        .post('https://fe-notes.herokuapp.com/note/create', {title: title, textBody: text})
        .then(res => {
            // console.log(res);
            dispatch({ type: ADD_NOTE_SUCCESS });
        })
        .catch(err => {
            // console.log(err);
            dispatch({ type: ADD_NOTE_FAILURE, payload: err});
        });
};

export const editNote = (title, text, id) => dispatch => {
    dispatch({ type: EDIT_NOTE_START });
    axios
        .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, {title: title, textBody: text})
        .then(res => {
            console.log(res);
            dispatch({ type: EDIT_NOTE_SUCCESS, payload: res.data });
        })
        .catch(err => {
            // console.log(err);
            dispatch({ type: EDIT_NOTE_FAILURE, payload: err});
        });
};

export const deleteNote = id => dispatch => {
    dispatch({ type: DELETE_NOTE_START });
    axios
        .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
        .then(res => {
            console.log(res);
            dispatch({ type: DELETE_NOTE_SUCCESS });
        })
        .catch(err => {
            // console.log(err);
            dispatch({ type: DELETE_NOTE_FAILURE, payload: err});
        });
};

