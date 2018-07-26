
export const saveNote = (title, textBody) => ({
  type: 'SAVE_NOTE',
  title,
  textBody
});

export const deleteNote = (id) => ({
  type: 'DELETE_NOTE',
  id,
});

export const editNote = (changedNote, id) => ({
  type: 'EDIT_NOTE',
  changedNote,
  id
});

