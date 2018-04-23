import * as AT from "./actionTypes";

export const fetchNotes = note => {
  return {
    type: ActionTypes.FETCH_NOTES,
    payload: note
  };
};
