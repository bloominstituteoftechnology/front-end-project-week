export const ADDING = 'ADDING';
export const ADDED = 'ADDED';
export const ERROR = 'ERROR';
export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';

export const addNote = (state) => { 
    return {
        type: 'ADD_NOTE',
        payload: state
    };
}

export const updateNote = (state) => {
    return {
        type: 'UPDATE_NOTE',
        payload: state
    }
}