export const ADD_NOTE = 'ADD_NOTE';

export const addNote = newNote => {
  return {
    type: ADD_NOTE,
    payload: newNote,
  };
};
