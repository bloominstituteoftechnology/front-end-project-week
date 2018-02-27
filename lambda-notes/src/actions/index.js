export const ADD_NOTE = 'ADD_NOTE';

let nextNoteId = 1;
export const addNote = (noteObj) => {
  return {
    type: ADD_NOTE,
    id: nextNoteId++,
    payload: noteObj,
  }
}