import Axios from 'axios';

export const POSTING_NOTE = 'CREATING_NOTE';
export const POSTED_NOTE = 'CREATED_NOTE';
export const GETTING_NOTES = 'GETTING_NOTES';
export const GOT_NOTES = 'GOT_NOTES';
export const GETTING_SINGLE_NOTE = 'GETTING_SINGLE_NOTE';
export const GOT_SINGLE_NOTE = 'GOT_SINGLE_NOTE';
export const PUTTING_NOTE = 'EDITING_NOTE';
export const PUT_NOTE = 'EDITED_NOTE';
export const DELETE_PROMPT = 'DELETE_PROMPT';
export const DELETING_NOTE = 'DELETING_NOTE';
export const DELETED_NOTE = 'DELETED_NOTE';
export const NOTE_ERROR = 'NOTE_ERROR';

const dataSource = 'https://killer-notes.herokuapp.com/note';

export const postNote = () => {

};

export const getNotes = () => {
    return (dispatch) => {
        dispatch( {type: GETTING_NOTES} );
        Axios
            .get(dataSource)
            .then( (response) => {
                console.log('getNotes:', response);
                // dispatch( {type: GOT_NOTES, payload: response.data} );
            })
            .catch( (err) => {
                dispatch( {type: NOTE_ERROR, payload: err.message} );
            });
    };
};

export const getSingleNote = () => {
    
};

export const putNote = () => {

};

export const deletePrompt = () => {

};

export const deleteNote = () => {

};
