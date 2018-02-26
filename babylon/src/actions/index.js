export const ADD_NOTE = 'ADD_NOTE';

let nextNoteId = 0;
export const addNote = data => ({
  type: 'ADD_TODO',
  id: nextNoteId++,
  title: data[0],
  body: data[1],
});
