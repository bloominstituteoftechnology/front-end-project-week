import { combineReducers } from 'redux';

import { NOTE_EXPANDED } from '../actions';
import { NOTE_CREATED } from '../actions';
import { NOTE_DELETED } from '../actions';
import Notes from '../components/Notes';




const notesReducer = (notes = Notes, action) => {
  switch (action.type) {
    case NOTE_CREATED:
      console.log('created:', notes);
      return [...notes, action.payload];
  
    case NOTE_EXPANDED:
    console.log('reached in action');
      return notes[action.payload];
      
    case NOTE_DELETED:
      return [
        ...notes.slice(0, action.payload),
        ...notes.slice(action.payload + 1)
      ];
      
    default:
    console.log(Notes);
      return notes;
  }
};




export const rootReducer = combineReducers({
  notes: notesReducer,
})