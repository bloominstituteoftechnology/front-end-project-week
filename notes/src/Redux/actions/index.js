export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';

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
  };
};

export const editNote = (editedNote, id) => {
  return {
    type: EDIT_NOTE,
    payload: editedNote,
    id: id,
  };
};
