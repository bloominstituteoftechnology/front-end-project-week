export const GET_NOTES = 'GET_NOTES';
export const ADD_NOTE = 'ADD_NOTE';

export const getNotes = notes => ({
    type: 'GET_NOTES',
    payload: notes
});

export const addNote = note => ({
    type: ADD_NOTE,
    payload: note
});