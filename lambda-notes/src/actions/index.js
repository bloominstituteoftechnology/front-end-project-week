export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export const createNote = (note) => {
  return {
    type: CREATE_NOTE,
    payload: note
  }
};

export const updateNote = (index) => {
  return {
    type: UPDATE_NOTE,
    payload: index
  }
};

export const deleteNote = (index) => {
  return {
    type: DELETE_NOTE,
    payload: index
  }
};
