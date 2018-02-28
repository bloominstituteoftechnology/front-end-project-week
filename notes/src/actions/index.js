export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const DELETE_NOTE = 'DELETE_NOTE';
export const SELECT_NOTE = 'SELECT_NOTE';

export const addNote = note => {
  return {
    type: ADD_NOTE,
    payload: note,
  };
};

export const updateNote = note => {
  return {
    type: UPDATE_NOTE,
    payload: note,
  };
};

export const toggleModal = () => {
  return {
    type: TOGGLE_MODAL,
  }
}

export const deleteNote = (id) => {
  return {
    type: DELETE_NOTE,
    payload: id,
  }
}

export const selectNote = (id) => {
  return {
    type: SELECT_NOTE,
    payload: id
  }
}