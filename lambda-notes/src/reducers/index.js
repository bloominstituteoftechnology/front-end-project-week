import {
  GET_NOTE,
  CREATE_NOTE,
  DELETE_NOTE
} from "../actions";

let initialNotes = [
  { id: 1, title: "redux", content: "Redux is ..." },
  { id: 2, title: "tips for front-end", content: "Students who..." }
];

const saveData = (array) => {
  return localStorage.setItem("array", JSON.stringify(array));
};

const retrieveData = () => {
  initialNotes = JSON.parse(localStorage.getItem("array"));
  return initialNotes === null ? [] : initialNotes;
};


export const notesReducer = (notes = retrieveData(), action) => {
  switch (action.type) {
    case CREATE_NOTE:
        const addedNote = Array.from(notes);
        addedNote.push(action.payload);
        saveData(addedNote);
        return addedNote;
    case DELETE_NOTE:
        let removedNote = Array.from(notes);
        removedNote = removedNote.filter(note => note.id !== parseInt(action.payload))
        saveData(removedNote);

        return removedNote;
    default:
      return notes;
  }
};
