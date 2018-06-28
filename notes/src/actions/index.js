import axios from 'axios';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const CREATE_NOTE = 'CREATE_NOTE';
export const FETCH_NOTES = 'FETCH_NOTES';
export const FETCHING_NOTES = 'FETCHING_NOTES';

export const deleteNote = (id) => {
    return {
        type: DELETE_NOTE,
        payload: id
    }
}

export const editNote = (noteData) => {
    return {
        type: EDIT_NOTE,
        payload: noteData
    }
}

export const createNote = (noteData) => {
    return {
        type: CREATE_NOTE,
        payload: noteData
    }
}

export const fetchNotes = () => {
    const getNotes = axios.get('http://localhost:5001/api/note')//promise
    return function(dispatch) { // instead of our action returning a flat object we are returning a function of dispatch which taps into the api straight from redux
    dispatch({ type: FETCHING_NOTES });
    getNotes
    .then(someData => {
        console.log(someData);
        setTimeout(() => {
        dispatch({type: FETCH_NOTES, payload: someData.data});
        }, 3000);
    })
        .catch(err => {
            console.log(err)
        })
    }
};