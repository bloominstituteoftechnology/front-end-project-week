export const ADD_NOTE = "ADD_NOTE";
export const VIEW_NOTE = "VIEW_NOTE";

let nextId = 10;
export const addNote = info => {
  return {
    type: "ADD_NOTE",
    payload: { ...info, id: nextId++ },
  };
};

export const viewNote = info => {
  return {
    type: "VIEW_NOTE",
    payload: info,
  };
};
