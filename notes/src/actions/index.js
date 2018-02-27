export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const addNote = (note) => {
  return {
    type: ADD_NOTE,
    payload: note
  }
};

export const deleteNote = (id) => {
  return {
    type: DELETE_NOTE,
    payload: id
  }
};

export const editNote = (note) => {
  return {
    type: EDIT_NOTE,
    payload: note
  }
};

export const toggleModal = (id) => {
  return {type: TOGGLE_MODAL, payload: id}
}