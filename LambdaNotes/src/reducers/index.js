import defaultNotes from './defaultNotes';

import { ADD_NOTE, ACTIVATE_NOTE, DEACTIVATE_NOTE } from '../actions';

let nextId = 7;

const intialState = {
  idCount: nextId,
  notes: defaultNotes,
  activeNote: null
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
    case ACTIVATE_NOTE:
     const active = state.notes.filter(note => note.id == action.payload)
     return { ...state, activeNote: active[0]}
    case DEACTIVATE_NOTE:
     return 
    default:
      return state;
  }
}