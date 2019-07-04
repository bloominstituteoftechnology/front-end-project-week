export const GET_NOTES = 'GET_NOTES';
export const ADD_NOTE = 'ADD_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const SEARCH_NOTES = 'SEARCH_NOTES';

export const getNotes = notes => ({
    type: 'GET_NOTES',
    payload: notes
});

export const addNewNote = note => ({
    type: 'ADD_NOTE',
    payload: note
});

export const editSingleNote = note => ({
    type: 'EDIT_NOTE',
    payload: note,
})

export const deleteNote = id => ({
    type: 'DELETE_NOTE'
})

export const searchNotes = search => ({
    type: 'SEARCH_NOTES',
    payload: search
})

