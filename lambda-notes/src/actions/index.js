export const ADD_NOTE = "ADD_NOTE";
export const VIEW_NOTE = "VIEW_NOTE";

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
