import { combineReducers } from 'redux';
import { notesReducer } from './notesReducer';
import { singleNoteReducer } from './singleNoteReducer';
import { usersReducer } from './usersReducer';

export default combineReducers({
  notesReducer,
  singleNoteReducer,
  usersReducer
});