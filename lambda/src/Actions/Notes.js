export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const FILTER_NOTE = 'FILTER_NOTE';

let nextNoteId= 0; //Need to define nextnoteId even though its not working
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

export const editNote = (id, title, content) => ({
  type: EDIT_NOTE,
  id,
  title,
  content,
});