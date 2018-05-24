import {
  EDIT_NOTE,
  CREATE_NOTE,
  DELETE_NOTE
} from "../actions";

let initialNotes = [
  { id: 1, title: "redux", content: "Redux is a predictable state container for JavaScript apps.It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger."},
  { id: 2, title: "tips for front-end", content: "Students who..." },
  { id: 3, title: "tips for front-end", content: "Students who..." }
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
    case EDIT_NOTE:
        let tempArray = Array.from(notes);
        tempArray = notes.filter(note => {
            return note.id !== action.payload.id
        })
        tempArray.push(action.payload)
        saveData(tempArray);
        return tempArray;
    default:
      return notes;
  }
};
