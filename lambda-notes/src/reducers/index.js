import { combineReducers } from 'redux';
import { notesReducer } from './notesReducer';
import { noteReducer } from './noteReducer';
import { authReducer } from './authReducer';

export default combineReducers({
  notesReducer, noteReducer, authReducer
})
