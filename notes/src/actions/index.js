export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

let noteId = 10;

export function addNote(note) {
  return {
    type: ADD_NOTE,
    id: noteId++,
    note
  };
}

export function deleteNote(id) {
  return {
    type: DELETE_NOTE,
    id
  };
}
