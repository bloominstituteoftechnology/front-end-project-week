import { combineReducers } from 'redux';
import notesReducer from './NotesReducer';

const rootReducer = combineReducers({
  notes: notesReducer
});

export default rootReducer;
