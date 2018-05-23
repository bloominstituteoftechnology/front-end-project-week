import {
  GET_NOTE,
  CREATE_NOTE,
  DELETE_NOTE
} from "../actions";

const initialNotes = [
  { id: 1, title: "redux", content: "Redux is ..." },
  { id: 2, title: "tips for front-end development", content: "Students who..." }
];

export const notesReducer = (notes = initialNotes, action) => {
  switch (action.type) {
    case GET_NOTE:
    console.log(typeof action.payload)
      return notes.filter(note => note.id === parseInt(action.payload))
    case CREATE_NOTE:
      return notes.concat(action.payload);
    default:
      return notes;
  }
};
