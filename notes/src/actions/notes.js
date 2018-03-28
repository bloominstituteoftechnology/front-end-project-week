export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

let nextNoteId = 0;
export const addNote = (title, content) => ({
    type: ADD_NOTE,
    id: nextNoteId++,
    title,
    content
});

export const deleteNote = id => ({
  type: DELETE_NOTE,
  id,
});