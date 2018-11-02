import { combineReducers } from 'redux';
import { notesReducer as flatNotes} from './NotesReducer';

export default combineReducers({
  flatNotes
});