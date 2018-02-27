export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export const addNote = newNote => {
  return {
    type: ADD_NOTE,
    payload: newNote,
  };
};

export const deleteNote = oldNote => {
  return {
    type: DELETE_NOTE,
    payload: oldNote.id,
  }
}