export const saveNote = (note) => ({
  type: 'SAVE_NOTE',
  payload: note
});

export const deleteNote = ({ id }) => ({
  type: 'DELETE_NOTE',
  payload: id,
})

