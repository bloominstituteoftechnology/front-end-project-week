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

export const addNewNote = (note, history) => dispatch => {
    dispatch({ type: ADD_NOTE_START });

    axios.post('https://killer-notes.herokuapp.com/note/create', note)
        .then(response => {
            // console.log(history);
            dispatch({ type: ADD_NOTE_COMPLETE, payload: response.data });
            history.push('/');
            // console.log(history);
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
            console.log("got it!");
        })
        .catch(err => {
            dispatch({ type: NOTE_GET_FAILURE, payload: err });
        });
};