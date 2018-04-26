export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export const addNote = (newNote) => {
    return {
        type:ADD_NOTE,
        newNote
    }
}

export const updateNote = (newNote, id) => {
    return {
        type: UPDATE_NOTE,
        newNote
    }
}

export const deleteNote = (id) => {
    return {
        type: DELETE_NOTE,
        id
    }
}