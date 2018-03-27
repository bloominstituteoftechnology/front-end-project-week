export const CREATE_NOTE = 'CREATE_NOTE';

export const createNote = (newNote) => {
  return {
    type: CREATE_NOTE,
    newNote: newNote
  };
};