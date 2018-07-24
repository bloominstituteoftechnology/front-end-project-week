export const GET_NOTES = 'GET_NOTES';
export const ADD_NOTE = 'ADD_NOTE';
export const VIEW_NOTE = 'VIEW_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';

export const getNotes = notes => ({
    type: 'GET_NOTES',
    payload: notes
});

export const addNewNote = note => ({
    type: 'ADD_NOTE',
    payload: note
});

export const viewSingleNote = note => ({
    type: 'VIEW_NOTE',
    payload: note
})


export const editSingleNote = note => ({
    type: 'EDIT_NOTE',
    payload: note,
})