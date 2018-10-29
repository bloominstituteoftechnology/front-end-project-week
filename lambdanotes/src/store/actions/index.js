import axios from 'axios';

export const FETCHING_NOTES= 'FETCHING_NOTES';
export const FETCHED_NOTES = 'FETCHED_NOTES';
export const ERROR_FETCHING_NOTES = 'ERROR_FETCHING_NOTES';

export const ADDING_NEW_NOTE = 'ADDING_NEW_NOTE';
export const NEW_NOTE_ADDED = 'NEW_NOTE_ADDED';
export const ERROR_ADDING_NEW_NOTE = 'ERROR_ADDING_NEW_NOTE';

export const DELETING_NOTE = 'DELETING_NOTE';
export const DELETED_NOTE = 'DELETED_NOTE';
export const ERROR_DELETING_NOTE = 'ERROR_DELETING_NOTE';

export const SET_UPDATE_NOTE = 'SET_UPDATE_NOTE';

export const UPDATING_NOTE = 'UPDATING_NOTE';
export const UPDATED_NOTE = 'UPDATED_NOTE';
export const ERROR_UPDATING_NOTE = 'ERROR_UPDATING_NOTE'; 

export function grabbingNotes() {
    return function (dispatch) {
        dispatch({ type: FETCHING_NOTES });
        axios.get('https:localhost:9000/api/notes')
        .then(response => {
            dispatch({ type: FETCHED_NOTES, payload: response.data });
        })
        .catch(error => {
            console.log("Error grabbing all notes", error)
            dispatch({ type: ERROR_FETCHING_NOTES, payload: error});
        });
    };
}

export function addNewNote(note) {
    return function(dispatch) {
        dispatch({ type: ADDING_NEW_NOTE });
        axios.post('https:localhost:9000/api/notes', note)
        .then(response => {
            dispatch({ type: NEW_NOTE_ADDED, payload: response.data });
        })
        .catch(error => {
            console.log("Error adding new note", error)
            dispatch({ type: ERROR_ADDING_NEW_NOTE, payload: error});
        });
    };
}

export const deleteNote = noteId => dispatch => {
    dispatch({ type: DELETING_NOTE });
    axios.delete(`https:localhost:9000/api/notes/${noteId}`)
    .then(response => {
        dispatch({ type: DELETED_NOTE, payload: response.data });
    })
    .catch(error => {
        dispatch({ type: ERROR_DELETING_NOTE, payload: error });
    });
}

export const setUpdateNote = id => {
    return { type: SET_UPDATE_NOTE, payload: id, };
};

export const updateNote = noteId => dispatch => {
    dispatch({ type: UPDATING_NOTE });
    axios.put(`https:localhost:9000/api/notes/${noteId}`)
    .then(response => {
        dispatch({ type: UPDATED_NOTE, payload: response.data });
    })
    .catch(error => {
        dispatch({ type: ERROR_UPDATING_NOTE, payload: error });
    });
};

