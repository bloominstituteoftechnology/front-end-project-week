export const LOAD_NOTES = 'LOAD_NOTES';

export const loadNotes = loaded => {
  return {
    type: LOAD_NOTES,
    payload: loaded
  };
};
