export const ADD_NOTE = "ADD_NOTE";
export const UPDATE_SELECTED = "UPDATE_SELECTED";
export const DELETE_NOTE = 'DELETE_NOTE';

let nextNoteId = 1;
export const addNote = noteObj => {
  return {
    type: ADD_NOTE,
    id: nextNoteId++,
    payload: noteObj
  };
};

export const updateSelected = id => {
  return {
    type: UPDATE_SELECTED,
    payload: id,
  };
};

export const deleteNote = id => {
  return {
    type: DELETE_NOTE,
    payload: id,
  }
}
