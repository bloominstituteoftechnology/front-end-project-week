export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_SELECTED = 'UPDATE_SELECTED';

let nextNoteId = 0;
export const addNote = (noteObj) => {
  return {
    type: ADD_NOTE,
    id: nextNoteId++,
    payload: noteObj,
  }
}

export const updateSelected = (id) => {
  return {
    type: UPDATE_SELECTED,
    payload: id,
  }
}