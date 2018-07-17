export const SUBMIT_NEW_NOTE = "SUBMIT_NEW_NOTE";
export const FETCH_SINGLE_NOTE = "FETCH_SINGLE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

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

export const editNote = edited => {
  return {
    type: EDIT_NOTE,
    payload: edited
  };
};

export const deleteNote = id => {
  console.log("id is:", id);
  return {
    type: DELETE_NOTE,
    payload: id
  };
};
