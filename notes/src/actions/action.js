export const SUBMIT_NEW_NOTE = "SUBMIT_NEW_NOTE";
export const FETCH_SINGLE_NOTE = "FETCH_SINGLE_NOTE";

export const submitNewNote = newNote => {
  return {
    type: SUBMIT_NEW_NOTE,
    payload: newNote
  };
};

export const fetchSingleNote = id => {
  return {
    type: FETCH_SINGLE_NOTE,
    payload: id
  };
};
