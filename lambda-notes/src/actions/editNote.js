export const EDIT_NOTE = 'EDIT_NOTE';

export const editNote = data => {
  return {
    type: EDIT_NOTE,
    payload: data,
  };
};
