export const ADD = "ADD";
export const EDIT = "EDIT";
export const DELETE = "DELETE";

export const addNote = note => {
  return {
    type: ADD,
    payload: {
      ...note,
      id: Date.now().toString(),
    },
  };
};

export const editNote = note => {
  return {
    type: EDIT,
    payload: {
      ...note,
    },
  };
};

export const deleteNote = id => {
  return {
    type: DELETE,
    payload: {
      id: id,
    },
  };
};