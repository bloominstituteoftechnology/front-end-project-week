export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';

export const addNote = note => {
  return ({type: ADD_NOTE, payload: note});
}

export const deleteNote = (note) => {
  return ({type: DELETE_NOTE, payload: note});
}

export const editNote = (note) => {
  return ({type: EDIT_NOTE, payload: note});
}