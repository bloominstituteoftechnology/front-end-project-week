import { combineReducers } from 'redux';
import { notesReducer as flatNotes} from './NotesReducer';
import { singleNoteReducer as singleFlatNote } from './SingleNoteReducer';

export default combineReducers({
  flatNotes, singleFlatNote
});