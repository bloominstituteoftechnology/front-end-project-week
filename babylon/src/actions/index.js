export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELERE_NOTE';
export const TOGGLE_DELETE = 'TOGGLE_DELETE';

let nextNoteId = 10;
export const addNote = data => ({
  type: ADD_NOTE,
  id: nextNoteId++,
  title: data.title,
  body: data.body,
});

export const updateNote = data => ({
  type: UPDATE_NOTE,
  id: data.id,
  title: data.title,
  body: data.body,
});

export const deleteNote = data => ({
  type: DELETE_NOTE,
  id: data.id,
});

export const toggleDelete = data => ({
  type: TOGGLE_DELETE,
});
