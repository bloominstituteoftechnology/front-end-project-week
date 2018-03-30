import axios from 'axios';
export const CREATE_NOTE = 'CREATE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const SORT_NEWEST = 'SORT_NEWEST';
export const SORT_OLDEST = 'SORT_OLDEST';
export const FETCH_NOTES = 'FETCH_NOTES';


let noteId;

axios.get('https://lambda-notes-b2b43.firebaseio.com/notes.json')
        .then((response) => {
            noteId = (Object.keys(response.data).reduce(
                (a,b) => {return a > b  ? a : b}));
                console.log(response)
        })
        .catch((error) => console.log(error));

export function fetchNotes () {
    return dispatch => {
        return axios.get('https://lambda-notes-b2b43.firebaseio.com/notes.json')
        .then((response) => {
            dispatch({type: FETCH_NOTES, notes: response.data});
        })
        .catch((error) => console.log(error))};
}

export const createNote = note => {
    return dispatch => {
        return axios.put(`https://lambda-notes-b2b43.firebaseio.com/notes/${++noteId}.json`, {
            id: noteId.toString(),
            title: note.title,
            text: note.text
        })
        .then((response) => {
            dispatch({
                type: CREATE_NOTE,
                id: noteId.toString(),
                title: note.title,
                text: note.text
            })
        })
        .catch((error) => console.log(error))};
}

export const editNote = note => {
    return dispatch => {
        return axios.put(`https://lambda-notes-b2b43.firebaseio.com/notes/${note.id}.json`, {
            id: note.id,
            title: note.title,
            text: note.text
        })
        .then((response) => {
            dispatch({
                type: EDIT_NOTE,
                id: note.id,
                title: note.title,
                text: note.text
            })
        })
        .catch((error) => console.log(error))};
}

export const deleteNote = note => {
    return dispatch => {
        return axios.delete(`https://lambda-notes-b2b43.firebaseio.com/notes/${note.id}.json`, {
            id: note.id,
        })
        .then((response) => {
            dispatch({
                type: DELETE_NOTE,
                id: note.id,
                title: note.title,
                text: note.text
            })})
        .catch((error) => console.log(error))};
}

export const sortNewest = () => {
    return {
        type: SORT_NEWEST,
    }
}

export const sortOldest = () => {
    return {
        type: SORT_OLDEST,
    }
}