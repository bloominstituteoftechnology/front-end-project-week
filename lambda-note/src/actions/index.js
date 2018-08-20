// 1. View
export const VIEW_NOTE = "VIEW_NOTE";
// dummy data for mvp
export const viewNote = (noteArray) => ({
  type: VIEW_NOTE,
  payload: noteArray
})

// 2. Add
export const ADD_NOTE = "ADD_NOTE";

export const addNote = () => ({
  type: ADD_NOTE,
  payload: {
    id: '',
    title: '',
    content: ''
  }
})

// 3. Edit 
export const EDIT_NOTE = "EDIT_NOTE";

export const editNote = () => ({
  type: EDIT_NOTE,
  payload: {
    id: '',
    title: '',
    content: ''
  }
})

// 4. Delete
export const DELETE_NOTE = "DELETE_NOTE"

export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  payload: id
})