import axios from 'axios';
//getting the notes list
export const NOTES_FETCH_START = 'NOTES_FETCH_START';
export const NOTES_FETCH_COMPLETE = 'NOTES_FETCH_COMPLETE';
export const NOTES_FETCH_FAILURE = 'NOTES_FETCH_FAILURE';

// // being able to see the single note
// export const GET_NOTE_START = 'GET_NOTE_START';
// export const GET_NOTE_COMPLETE = 'GET_NOTE_COMPLETE ';
// export const GET_NOTE_FAILURE = 'GET_NOTE_FAILURE';

// this is adding the note
export const ADD_NOTE_START = 'ADD_NOTE_START';
export const ADD_NOTE_COMPLETE = 'ADD_NOTE_COMPLETE';
export const ADD_NOTE_FAILURE = 'ADD_NOTE_FAILURE';

// this is to delete the note
export const DELETE_NOTE_START = 'ELETE_NOTE_START';
export const DELETE_NOTE_COMPLETE = 'DELETE_NOTE_COMPLETE';
export const DELETE_NOTE_FAILURE = 'DELETE_NOTE_FAILURE ';

// this is to edit/update the note
export const EDIT_NOTE_START = 'EDIT_NOTE_START';
export const EDIT_NOTE_COMPLETE = 'EDIT_NOTE_COMPLETE';
export const EDIT_NOTE_FAILURE = 'EDIT_NOTE_FAILURE';

// to edit a single note
export const SET_EDIT_NOTE = 'SET_EDIT_NOTE';

const URL = 'https://killer-notes.herokuapp.com/note/get/all';

const URLC = 'https://killer-notes.herokuapp.com/note/create';



export const getNotes = () => dispatch => {
    dispatch({ type:NOTES_FETCH_START });
    const promise = axios.get(`${URL}`);
    promise
    .then(response => {
        dispatch({ type: NOTES_FETCH_COMPLETE, payload: response.data });
    })
    .catch(err => {
        dispatch({ type:NOTES_FETCH_FAILURE, payload: err });
    });
};

// export const getNote = noteid => dispatch =>{
    
//     dispatch ({ type:GET_NOTE_START });
//     axios
//     .get(`https://killer-notes.herokuapp.com/note/get/${noteid}`)
//     .then(response => {
//         dispatch ({ type:GET_NOTE_COMPLETE, payload: response.data });
//     })
//     .catch (err =>{
//         dispatch({ type: GET_NOTE_FAILURE, payload: err });
//     });
// };


export const addNewNote = note => dispatch => {
    dispatch({ type:ADD_NOTE_START });
    axios
        .post(`${URLC}`, note)
        .then(response => {
            dispatch({ type: ADD_NOTE_COMPLETE, payload: response.data });
        })
        .catch(err => {
            dispatch({ type: ADD_NOTE_FAILURE, payload: err });
        });
};

export const deleteNote = noteId => dispatch => {
    dispatch({ type: DELETE_NOTE_START });
    axios
    .delete(`https://killer-notes.herokuapp.com/note/delete/${noteId}`)
    .then(response => {
        dispatch({ type: DELETE_NOTE_COMPLETE, payload: response.data });
    })
    .catch(err => {
        dispatch({ type: DELETE_NOTE_FAILURE, payload: err });
    });
};

export const setEditNote = id => {
    return {
        type: SET_EDIT_NOTE,
        payload: id,
    };
};

export const editNote = note => dispatch => {
    dispatch ({ type: EDIT_NOTE_START });
    axios
    .put(`https://killer-notes.herokuapp.com/note/edit/${note._id}`, note)
    .then(response => {
        dispatch({ type: EDIT_NOTE_COMPLETE, payload: response.data });
    })
    .catch(err =>{
        dispatch({ type: EDIT_NOTE_FAILURE, payload: err });
    });
};