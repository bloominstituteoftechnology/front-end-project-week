// actions types
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';

// actions creators
export const addNote = newNote => ({
  type: ADD_NOTE,
  payload: newNote,
})

export const deleteNote = id => ({
  type: DELETE_NOTE,
  payload: { id },
})

export const updateNote = (newNote, id) => ({
  type: UPDATE_NOTE,
  payload: {
    id,
    ...newNote,
  },
})