import axios from 'axios';

export const NOTES_FETCH_START = 'NOTES_FETCH_START';
export const NOTES_FETCH_COMPLETE = 'NOTES_FETCH_COMPLETE';
export const NOTES_FETCH_FAILURE = 'NOTES_FETCH_FAILURE';

export const ADD_NOTE_START = 'ADD_NOTE_START';
export const ADD_NOTE_COMPLETE = 'ADD_NOTE_COMPLETE';
export const ADD_NOTE_FAILURE = 'ADD_NOTE_FAILURE';

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

// export const addNewNote = Note => dispatch => {
//     dispatch({ type: ADD_NOTE_START });

//     axios.post('http://localhost:5000/notes', NOTE)
//         .then(response => {
//             dispatch({ type: ADD_NOTE_COMPLETE, payload: response.data });
//         }).catch(err => {
//             dispatch({ type: ADD_NOTE_FAILURE, payload: err });
//         });
// }