export const SUBMIT_NEW_NOTE = "SUBMIT_NEW_NOTE";

export const submitNewNote = newNote => {
  return {
    type: SUBMIT_NEW_NOTE,
    payload: newNote
  };
};
