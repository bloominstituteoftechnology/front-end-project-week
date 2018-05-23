import {
  FETCH_NOTES,
  CREATE_NOTE,
  DELETE_NOTE
} from "../actions";

const initialNotes = [
  { id: 1, title: "redux", content: "Redux is ..." },
  { id: 2, title: "tips for front-end development", content: "Students who..." }
];

export const notesReducer = (notes = initialNotes, action) => {
  switch (action.type) {
    case FETCH_NOTES:
      return notes.concat(action.payload);
    case CREATE_NOTE:
      return notes.concat(action.payload);
    default:
      return notes;
  }
};
