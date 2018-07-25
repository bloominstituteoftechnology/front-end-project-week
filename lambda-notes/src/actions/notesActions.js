export const SAVE_NOTE = 'SAVE_NOTE';

export const saveNote = (title, textBody) => ({
  type: SAVE_NOTE,
  title,
  textBody
});

export const deleteNote = ({ id } = {}) => ({
  type: 'DELETE_NOTE',
  id,
})

