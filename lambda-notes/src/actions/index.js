export const ADD_NOTE = 'ADD_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const VIEW_NOTE = 'VIEW_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'

export const addNote = (title,body) =>({
   type : ADD_NOTE,
   title,
   body
})

export const editNote = noteData => ({
    type : EDIT_NOTE,
    payload : noteData
})

export const viewNote = id => ({
    type : VIEW_NOTE,
    payload : id
})

export const deleteNote = id => ({
    type : DELETE_NOTE,
    payload : id
})