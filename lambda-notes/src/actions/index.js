export const CREATE_NOTE = "CREATE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

let nextId = 10;

export const createNote = note => {
  return {
    type: CREATE_NOTE,
    id: nextId++,
    name: note.title,
    text: note.text
  };
};

export const editNote = note => {
  return {
    type: EDIT_NOTE,
    id: note.id,
    name: note.title,
    text: note.text
  };
};

export const deleteNote = note => {
  return {
    type: DELETE_NOTE,
    id: note.id,
    name: note.title,
    text: note.text
  };
};
