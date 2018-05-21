export const ADD_NOTE = 'ADD_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

export const addNote = (note) => {
    return {
        type: ADD_NOTE,
        payload: note
    };
};

export const editNote = (id) => {
    return {
        type: EDIT_NOTE,
        payload: id
    };
};

export const removeNote = (id) => {
    return {
        type: REMOVE_NOTE,
        payload: id
    };
};