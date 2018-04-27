import * as AT from "./actionTypes";

export const editNote = (noteStuff, noteID) => {
  return {
    type: AT.EDIT_NOTE,
    payload: noteStuff,
    noteID: noteID
  };
};
