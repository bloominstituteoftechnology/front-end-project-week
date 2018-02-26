export const ADD_NOTE = 'ADD_NOTE';

let nextNoteId = 0;
export const addNote = data => ({
  type: 'ADD_TODO',
  id: nextNoteId++,
  data
});
