const ADD_NOTE = "ADD_NOTE";

function addNote(note) {
  return {
    type: ADD_NOTE,
    note
  };
}
