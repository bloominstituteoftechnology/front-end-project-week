import * as AT from "./actionTypes";

export const createNote = (note) => {
  return {
    type: AT.CREATE_NOTE,
    payload: note
  };
};
