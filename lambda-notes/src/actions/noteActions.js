import { GET_NOTES, DELETE_NOTE, ADD_NOTE } from './types';

export const getNotes = () => {
    return {
        type: GET_NOTES
    };
};

export const deletNote = (id) => {
    return {
        type: DELETE_NOTE,
        payload: id
    };
};

export const addNote = (note) => {
    return {
        type: ADD_NOTE,
        payload: note
    };
};