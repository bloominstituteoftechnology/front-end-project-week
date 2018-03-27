export const ADD_NOTE = "ADD_NOTE";
let noteId = 10;

export function addNote(note) {
  return {
    type: ADD_NOTE,
    id: noteId++,
    note
  };
}
