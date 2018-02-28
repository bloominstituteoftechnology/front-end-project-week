export const CREATE_NOTE = 'CREATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export const createNote = (note) => {
  return {
    type: CREATE_NOTE,
    payload: note,
  }
}

export const deleteNote = (id) => {
  return {
    type: DELETE_NOTE,
    payload: id,
  }
}