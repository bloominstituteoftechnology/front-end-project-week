import { combineReducers } from 'redux';
import NoteReducer from './notes';

const rootReducer = combineReducers({
  notes: NoteReducer
});

export default rootReducer;
