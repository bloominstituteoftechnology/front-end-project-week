export const SEE_NOTE = 'SEE_NOTE';

export const seeNote = id => {
  return {
    type: 'SEE_NOTE',
    payload: id,
  };
};