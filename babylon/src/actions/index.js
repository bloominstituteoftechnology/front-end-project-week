export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';

let nextNoteId = 10;
export const addNote = data => ({
  type: ADD_NOTE,
  id: nextNoteId++,
  title: data.title,
  body: data.body,
});

export const updateNote = data => ({
  type: UPDATE_NOTE,
  title: data.title,
  body: data.body,
});
