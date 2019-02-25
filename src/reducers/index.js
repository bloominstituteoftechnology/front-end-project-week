import { combineReducers } from 'redux';
import { notesReducer } from './notesReducer';
import { listsReducer } from './listsReducer';
import { singleNoteReducer } from './singleNoteReducer';
import { singleListReducer } from './singleListReducer';
import { usersReducer } from './usersReducer';

export default combineReducers({
  notesReducer,
  listsReducer,
  singleNoteReducer,
  singleListReducer,
  usersReducer
});