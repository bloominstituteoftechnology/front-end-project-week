export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";

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

export function editNote(note, id) {
  return {
    type: EDIT_NOTE,
    note,
    id
  };
}