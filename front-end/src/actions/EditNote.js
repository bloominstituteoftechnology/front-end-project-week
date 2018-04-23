import * as AT from "./actionTypes";

export const createNote = note => {
  return {
    type: EDIT_NOTE,
    payload: note
  };
};
