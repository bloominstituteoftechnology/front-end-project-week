import axios from 'axios';
export const ADD_NOTE = 'ADD_NOTE';
let noteId = 10;

export const addNote = (note) => {
    return {
        type:ADD_NOTE,
        id:noteId++,
        note
    }
}

export const EDIT_NOTE = 'EDIT_NOTE';

export const editNote =(note,id) => {
    return {
        type: EDIT_NOTE,
        note,
        id
    }
}

export const DELETE_NOTE = 'DELETE_NOTE';

export const deleteNote =(id) => {
    return {
        type: DELETE_NOTE,
        id
    }
}