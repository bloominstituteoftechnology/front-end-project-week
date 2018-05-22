export const ADD = "ADD";
export const EDIT = "EDIT";

export const addNote = (note) => {
  return {
    type: ADD,
    payload: note,
  };
}
