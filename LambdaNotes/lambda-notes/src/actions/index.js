// ACTION TYPES
export const EDIT_NOTE = 'EDIT_NOTE';
export const CREATE_NOTE = 'CREATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

// ACTION CREATORS
export const editNote = (note, index) => {
  console.log(index);
  return { type: EDIT_NOTE, payload: { title: note.title, text: note.text }, index };
};

export const createNote = (note) => {
  return { type: CREATE_NOTE, payload: { title: note.title, text: note.text }};
};

export const deleteNote = (note) => {
  return { type: DELETE_NOTE, payload: note.index };
};
