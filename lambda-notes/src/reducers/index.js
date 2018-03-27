import { combineReducers } from 'redux';

import { NOTE_EXPANDED } from '../actions';
import Notes from '../components/Notes';



const notesReducer = (notes = Notes, action) => {
  switch (action.type) {
    case NOTE_EXPANDED:
      return action.payload;
    default:
      return notes;
  }
};




export const rootReducer = combineReducers({
  notes: notesReducer,
})