export const addNote = (note) => {
  return {
    type: 'ADD_NOTE',
    payload: note,
  }
  return note;
}

export const editNote = (note) => {
  return {
    type: 'EDIT_NOTE',
    payload: note,
  }
  return note;
}

export const deleteNote = (note) => {
  return {
    type: 'DELETE_NOTE',
    payload: note,
  }
  return note;
}
