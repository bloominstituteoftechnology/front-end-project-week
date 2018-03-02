export const ADD_NOTE = "ADD_NOTE";
export const VIEW_NOTE = "VIEW_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

let nextId = 10;
export const addNote = note => {
  return {
    type: "ADD_NOTE",
    payload: { ...note, id: nextId++ },
  };
};

export const viewNote = id => {
  return {
    type: "VIEW_NOTE",
    payload: id,
  };
};

export const editNote = note => {
  return {
    type: "EDIT_NOTE",
    payload: note,
  };
};

export const deleteNote = id => {
  return {
    type: "DELETE_NOTE",
    payload: id,
  };
};
