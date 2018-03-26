import defaultNotes from './defaultNotes';

import { ADD_NOTE } from '../actions';

let nextId = 7;

const intialState = {
  idCount: nextId,
  notes: defaultNotes
}

export default (state = intialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
    const newNote = {
        id: state.idCount++,
        title: action.title,
        text: action.text
    }
      return { ...state, notes: state.notes.concat(newNote) };
    default:
      return state;
  }
}

/*export const ADD_NOTE = 'ADD_NOTE';

export const addNote = (note) => {
  return {
    type: ADD_NOTE,
    title: note.title,
    text: note.text
  };
}*/