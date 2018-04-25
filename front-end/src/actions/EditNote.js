import * as AT from "./actionTypes";

export const createNote = noteContent => {
  return {
    type: AT.EDIT_NOTE,
    payload: noteContent
  };
};
