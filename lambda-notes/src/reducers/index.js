import {
  FETCH_NOTES,
  CREATE_NOTE,
  DELETE_NOTE
} from "../actions";

export const notesReducer = (notes = [], action) => {
  switch (action.type) {
    case FETCH_NOTES:
      return notes.concat(action.payload);
    case CREATE_NOTE:
      return notes.concat(action.payload);
    default:
      return notes;
  }
};
