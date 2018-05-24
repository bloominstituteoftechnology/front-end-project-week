export const ADD_NOTE = 'ADD_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

let noteID = 9;

export const addNote = note => {
    noteID++;
    return {
        type: ADD_NOTE,
        payload: {
            id: noteID,
            title: note.title,
            body: note.body
        }
    };
};

export const editNote = (note) => {
    return {
        type: EDIT_NOTE,
        payload: note
    };
};

export const removeNote = (id) => {
    return {
        type: REMOVE_NOTE,
        payload: id
    };
};