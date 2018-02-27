export const CREATE_NOTE = 'CREATE_NOTE';

export const createNote = (note) => {
  return {
    type: CREATE_NOTE,
    payload: note,
  }
}