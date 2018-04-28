import * as AT from "./actionTypes";

export const fetchNotes = note => {
  return {
    type: AT.FETCH_NOTES,
    payload: note
  };
};
