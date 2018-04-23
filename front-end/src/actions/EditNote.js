import * as AT from "./actionTypes";

export const createNote = note => {
  return {
    type: AT.EDIT_NOTE,
    payload: note
  };
};
