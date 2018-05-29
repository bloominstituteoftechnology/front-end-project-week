import { v4 } from 'node-uuid';
export const ADD_NOTE = 'ADD_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

export const addNote = note => {
    return {
        type: ADD_NOTE,
        payload: {
            id: v4(),
            title: note.title,
            body: note.body,
            createdAt: Date.now()
        }
    };
};

export const editNote = (note) => {
    return {
        type: EDIT_NOTE,
        payload: {
            id: note.id,
            title: note.title,
            body: note.body,
            createdAt: note.createdAt
        }
    };
};

export const removeNote = (id) => {
    return {
        type: REMOVE_NOTE,
        payload: id
    };
};