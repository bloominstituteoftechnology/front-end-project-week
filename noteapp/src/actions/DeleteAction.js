export const DELETE_NOTE = 'DELETE_NOTE';

export const deleteNote = deleted => {
  return {
    type: DELETE_NOTE,
    payload: deleted
  };
};
