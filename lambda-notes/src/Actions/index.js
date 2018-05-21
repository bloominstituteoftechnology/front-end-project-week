export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';

export const addNote = (data) => {
    return {
        type: ADD_NOTE,
        payload: data
    }
}

export const deleteNote = (id) => {
    return {
        type: DELETE_NOTE,
        id,
    }
}

export const editNote = (id) => {
    return {
        type: EDIT_NOTE,
        id,
    }
}
