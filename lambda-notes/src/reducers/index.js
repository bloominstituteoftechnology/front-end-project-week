import { combineReducers } from 'redux';

import { NOTE_EXPANDED } from '../actions';
import Notes from '../components/Notes';



const notesReducer = (notes = Notes, action) => {
  switch (action.type) {
    case NOTE_EXPANDED:
    console.log('reached in action');
      return notes[action.payload];
    default:
    console.log(Notes);
      return notes;
  }
};




export const rootReducer = combineReducers({
  notes: notesReducer,
})