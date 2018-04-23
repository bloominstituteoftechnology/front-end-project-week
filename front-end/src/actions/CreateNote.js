import * as AT from "./actionTypes";

export const createNote = note => {
  return {
    type: CREATE_NOTE,
    payload: note
  };
};
