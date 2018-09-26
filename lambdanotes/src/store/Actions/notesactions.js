import Axios from 'axios';

export const POSTING_NOTE = 'POSTING_NOTE';
export const POSTED_NOTE = 'POSTED_NOTE';
export const GETTING_NOTES = 'GETTING_NOTES';
export const GOT_NOTES = 'GOT_NOTES';
export const GETTING_SINGLE_NOTE = 'GETTING_SINGLE_NOTE';
export const GOT_SINGLE_NOTE = 'GOT_SINGLE_NOTE';
export const PUTTING_NOTE = 'PUTTING_NOTE';
export const PUTTED_NOTE = 'PUTTED_NOTE';
export const DELETE_PROMPT = 'DELETE_PROMPT';
export const DELETING_NOTE = 'DELETING_NOTE';
export const DELETED_NOTE = 'DELETED_NOTE';
export const NOTE_ERROR = 'NOTE_ERROR';
export const NOTE_TO_EDIT = 'NOTE_EDIT';

const dataSource = 'https://killer-notes.herokuapp.com/note';

export const postNote = (newNote) => {
    return (dispatch) => {
        dispatch( {type: POSTING_NOTE} );
        Axios
            .post(`${dataSource}/create`, newNote)
            .then( (response) => {
                dispatch( {type: POSTED_NOTE, payload: response.data.success} );
            })
            .catch( (err) => {
                dispatch( {type: NOTE_ERROR, payload: err.message} );
            });
    };
};

export const getNotes = () => {
    return (dispatch) => {
        dispatch( {type: GETTING_NOTES} );
        Axios
            .get(`${dataSource}/get/all`)
            .then( (response) => {
                dispatch( {type: GOT_NOTES, payload: response.data} );
            })
            .catch( (err) => {
                dispatch( {type: NOTE_ERROR, payload: err.message} );
            });
    };
};

export const getSingleNote = (noteId) => {
    return (dispatch) => {
        dispatch( {type: GETTING_SINGLE_NOTE} );
        Axios
            .get(`${dataSource}/get/${noteId}`)
            .then( (response) => {
                dispatch( {type: GOT_SINGLE_NOTE, payload: response.data} );
            })
            .catch( (err) => {
                dispatch( {type: NOTE_ERROR, payload: err.message} );
            });
    };
};

export const putNote = (updatedNote, noteId) => {

};

export const deletePrompt = () => {

};

export const deleteNote = (noteId) => {

};

export const noteToEdit = (noteId) => {
    return (dispatch) => dispatch( {type: NOTE_TO_EDIT, payload: noteId});
};
