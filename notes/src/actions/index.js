export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';

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
