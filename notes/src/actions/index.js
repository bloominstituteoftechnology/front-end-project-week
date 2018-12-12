import axios from 'axios';

export const NOTES_FETCHING = 'NOTES_FETCHING';
export const NOTES_FETCH_SUCCESS = 'NOTES_FETCH_SUCCESS';
export const NOTES_FETCH_FAILURE = 'NOTES_FETCH_FAILURE';
export const DELETE_NOTE_START = 'DELETE_NOTE_START';
export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';
export const DELETE_NOTE_FAILURE = 'DELETE_NOTE_FAILURE';
export const ADD_NOTE_START = 'ADD_NOTE_START';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';
export const ADD_NOTE_FAILURE = 'ADD_NOTE_FAILURE';
export const EDIT_NOTE_START = 'EDIT_NOTE_START';
export const EDIT_NOTE_SUCCESS = 'EDIT_NOTE_SUCCESS';
export const EDIT_NOTE_FAILURE = 'EDIT_NOTE_FAILURE';

export const getNotes = () => dispatch => {
    dispatch({ type: NOTES_FETCHING });
    axios
        .get('https://fe-notes.herokuapp.com/note/get/all')
        .then(response => {
            dispatch({ type: NOTES_FETCH_SUCCESS, payload: response.data })
        })
        .catch(err => dispatch({ type: NOTES_FETCH_FAILURE, payload: err }));
}

export const deleteNote = id => dispatch => {
    dispatch({ type: DELETE_NOTE_START });
    axios
        .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
        .then(response => {
            dispatch({ type: DELETE_NOTE_SUCCESS });
            axios
                .get('https://fe-notes.herokuapp.com/note/get/all')
                .then(response => {
                    dispatch({ type: NOTES_FETCH_SUCCESS, payload: response.data })
                })
                .catch(err => dispatch({ type: NOTES_FETCH_FAILURE, payload: err }))
        })
        .catch(err => dispatch({ type: DELETE_NOTE_FAILURE, payload: err }));
};

export const addNote = (title, textBody) => dispatch => {
    dispatch({ type: ADD_NOTE_START });
    axios
        .post('https://fe-notes.herokuapp.com/note/create', {
            title: `${title}`,
            textBody: `${textBody}`
        })
        .then(response => {
            dispatch({ type: ADD_NOTE_SUCCESS });
            axios
                .get('https://fe-notes.herokuapp.com/note/get/all')
                .then(response => {
                    dispatch({ type: NOTES_FETCH_SUCCESS, payload: response.data })
                })
                .catch(err => dispatch({ type: NOTES_FETCH_FAILURE, payload: err }))
        })
        .catch(err => dispatch({ type: ADD_NOTE_FAILURE, payload: err }));
};

export const editNote = (id, title, textBody) => dispatch => {
    dispatch({ type: EDIT_NOTE_START });
    axios
        .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, {
            title: `${title}`,
            textBody: `${textBody}`
        })
        .then(response => {
            console.log(response);
            dispatch({ type: EDIT_NOTE_SUCCESS })
            axios
            .get('https://fe-notes.herokuapp.com/note/get/all')
            .then(response => {
                dispatch({ type: NOTES_FETCH_SUCCESS, payload: response.data })
            })
            .catch(err => dispatch({ type: NOTES_FETCH_FAILURE, payload: err }))
        })
        .catch(err => dispatch({ type: EDIT_NOTE_FAILURE, payload: err }));
}