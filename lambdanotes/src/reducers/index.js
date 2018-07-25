import { combineReducers } from 'redux';
import notesReducer from './notesReducer';
import singleNoteReducer from './singleNoteReducer';

export default combineReducers({
    notesReducer,
    singleNoteReducer
});