export const ADD_NOTE = 'ADD_NOTE';

export const addNote = (note) => {
  return {
    type: ADD_NOTE,
    title: note.title,
    text: note.text
  };
}