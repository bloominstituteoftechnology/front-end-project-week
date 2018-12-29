import axios from 'axios';

export const NOTE_FETCH_IN_PROGRESS = "NOTE_FETCH_IN_PROGRESS";
export const NOTE_FETCH_SUCCESS = "NOTE_FETCH_SUCCESS";
export const NOTE_FETCH_FAILURE = "NOTE_FETCH_FAILURE";
export const NOTES_FETCH_IN_PROGRESS = "NOTES_FETCH_IN_PROGRESS";
export const NOTES_FETCH_SUCCESS = "NOTES_FETCH_SUCCESS";
export const NOTES_FETCH_FAILURE = "NOTES_FETCH_FAILURE";
export const NOTES_CREATE_IN_PROGRESS = "NOTES_CREATE_IN_PROGRESS";
export const NOTES_CREATE_SUCCESS = "NOTES_CREATE_SUCCESS";
export const NOTES_CREATE_FAILURE = "NOTES_CREATE_FAILURE";
export const NOTES_SET_EDIT_IN_PROGRESS = "NOTES_SET_EDIT_IN_PROGRESS";
export const NOTES_EDIT_IN_PROGRESS = "NOTES_EDIT_IN_PROGRESS";
export const NOTES_EDIT_SUCCESS = "NOTES_EDIT_SUCCESS";
export const NOTES_EDIT_FAILURE = "NOTES_EDIT_FAILURE";
export const NOTES_REMOVE_IN_PROGRESS = "NOTES_REMOVE_IN_PROGRESS";
export const NOTES_REMOVE_SUCCESS = "NOTES_REMOVE_SUCCESS";
export const NOTES_REMOVE_FAILURE = "NOTES_REMOVE_FAILURE";

export const noteFetch = noteID => dispatch => {
    dispatch({ type: NOTE_FETCH_IN_PROGRESS });
    axios
        // .get(`https://killer-notes.herokuapp.com/note/get/${noteID}`)
        .get(`https://lambda-notes-v01.herokuapp.com/notes/${noteID}`)
        .then((response) => {
            dispatch({
                type: NOTE_FETCH_SUCCESS,
                payload: response.data
            });
        })
        .catch((err) => {
            dispatch({
                type: NOTE_FETCH_FAILURE,
                payload: err
            });
        });
};

export const notesFetch = () => dispatch => {
    dispatch({ type: NOTES_FETCH_IN_PROGRESS });
    axios
        // .get("https://killer-notes.herokuapp.com/note/get/all")
        .get("https://lambda-notes-v01.herokuapp.com/notes")
        .then((response) => {
            dispatch({
                type: NOTES_FETCH_SUCCESS,
                payload: response.data
            });
        })
        .catch((err) => {
            dispatch({
                type: NOTES_FETCH_FAILURE,
                payload: err
            });
        });
};

export const notesCreate = note => dispatch => {
    dispatch({ type: NOTES_CREATE_IN_PROGRESS });
    axios
        // .post("https://killer-notes.herokuapp.com/note/create", note)
        .post("https://lambda-notes-v01.herokuapp.com/notes", note)
        .then((response) => {
            dispatch({
                type: NOTES_CREATE_SUCCESS,
                payload: response.data
            });
        })
        .catch((err) => {
            dispatch({
                type: NOTES_CREATE_FAILURE,
                payload: err
            });
        });
};

export const notesSetEdit = id => {
    return {
        type: NOTES_SET_EDIT_IN_PROGRESS,
        payload: id
    };
};

export const notesEdit = note => dispatch => {
    dispatch({ type: NOTES_EDIT_IN_PROGRESS });
    axios
        // .put(`https://killer-notes.herokuapp.com/note/edit/${note._id}`, note)
        .put(`https://lambda-notes-v01.herokuapp.com/notes/${note.id}`, note)
        .then((response) => {
            dispatch({
                type: NOTES_EDIT_SUCCESS,
                payload: response.data
            });
        })
        .catch((err) => {
            dispatch({
                type: NOTES_EDIT_FAILURE,
                payload: err
            });
        });
}

export const notesRemove = noteID => dispatch => {
    dispatch({ type: NOTES_REMOVE_IN_PROGRESS });
    axios
        // .delete(`https://killer-notes.herokuapp.com/note/delete/${noteID}`)
        .delete(`https://lambda-notes-v01.herokuapp.com/notes/${noteID}`)
        .then((response) => {
            dispatch({
                type: NOTES_REMOVE_SUCCESS,
                payload: response.data
            });
        })
        .catch((err) => {
            dispatch({
                type: NOTES_REMOVE_FAILURE,
                payload: err
            });
        });
};