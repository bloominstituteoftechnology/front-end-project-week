export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';

export const addNote = (added) => {
  return {
    type: ADD_NOTE,
    payload: added,
  };
};

export const editNote = (edited, id) => {
  return {
    type: EDIT_NOTE,
    payload: edited,
    id: id,
  };
};

export const deleteNote = (deleted) => {
  return {
    type: DELETE_NOTE,
    payload: deleted.id,
  };
};