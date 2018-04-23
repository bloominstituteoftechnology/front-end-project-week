import axios from 'axios';

export const ERROR = 'ERROR';
export const ADD_NOTES = 'ADD_NOTES';
export const EDIT_NOTES = 'EDIT_NOTES';
export const DELETE_NOTES = 'DELETE_NOTES';

export const addNote = (added) => {
    return {
        type: ADD_NOTES,
        payload: added,
    };
};

export const editNote = (edited, id) => {
    return {
        type: EDIT_NOTES,
        payload: edited,
        id: id,
    };
};

export const deleteNote = (deleted) => {
    return {
        type: DELETE_NOTES,
        payload: deleted.id
    };
};