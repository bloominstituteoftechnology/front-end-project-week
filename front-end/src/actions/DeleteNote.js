import * as AT from "./actionTypes";

export const deleteNote = (noteID) => {
  return {
    type: AT.DELETE_NOTE,
    payload: noteID
  };
};
