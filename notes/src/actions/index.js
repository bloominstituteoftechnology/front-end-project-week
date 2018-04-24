import axios from 'axios';
export const CREATE_NOTE = 'CREATE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const SORT_NEWEST = 'SORT_NEWEST';
export const SORT_OLDEST = 'SORT_OLDEST';
export const FETCH_NOTES = 'FETCH_NOTES';
export const SEARCH = 'SEARCH';


let noteId = 0;

axios.get('https://lambda-notes-b2b43.firebaseio.com/notes.json')
        .then((response) => {
            if(Object.keys(response.data).length) {
                noteId = (Object.keys(response.data).reduce(
                    (a,b) => {return parseInt(a) > parseInt(b)  ? a : b}));
                console.log(noteId);
            }
        })
        .catch((error) => console.log(error));

export const fetchNotes = () => {
    return dispatch => {
        return axios.get('https://lambda-notes-b2b43.firebaseio.com/notes.json')
        .then((response) => {
            console.log('fetching');
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
            });
            window.location.reload();
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

export const search = (input) => {
    return dispatch => {
        return axios.get('https://lambda-notes-b2b43.firebaseio.com/notes.json')
        .then((response) => {
            dispatch({
                type: SEARCH,
                notes: Object.values(response.data),
                input});
        })
        .catch((error) => console.log(error))};
}
