import * as AT from "./actionTypes";

export const createNote = (title, content) => {
  return {
    type: AT.CREATE_NOTE,
    payload: title, content
  };
};
