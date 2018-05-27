import {
  EDIT_NOTE,
  CREATE_NOTE,
  DELETE_NOTE
} from "../actions";

import { v4 } from 'node-uuid';

let initialNotes = [
  { id: v4(), title: "redux", content: "Redux is a predictable state container for JavaScript apps.It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger."},
  { id: v4(), title: "tips for front-end", content: "Because we are going to be studying NodeJS it is crucial to understand that there is a difference between just the Server Side JavaScript Language, and the packages/middlewares/frameworks that are commonly used when working with it." },
  { id: v4(), title: "Note.js", content: "Students who..." }
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
        removedNote = removedNote.filter(note => 
           {return note.id !== action.payload}
        )
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
