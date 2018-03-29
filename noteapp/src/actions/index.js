export const LOAD_NOTES = 'LOAD_NOTES';

export const loadNotes = load => {
  return {
    type: LOAD_NOTES,
    payload: load
  };
};
