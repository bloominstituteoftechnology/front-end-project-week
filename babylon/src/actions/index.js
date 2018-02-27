export const ADD_NOTE = 'ADD_NOTE';

let nextNoteId = 10;
export const addNote = data => ({
  type: 'ADD_NOTE',
  id: nextNoteId++,
  title: data.title,
  body: data.body,
});
