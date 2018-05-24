import { combineReducers } from 'redux';
import { notesReducer } from './notesReducer';
import { toolsReducer } from './toolsReducer';
import { tagsReducer } from './tagsReducer';
import { userReducer } from './userReducer';

export default combineReducers({
  notesReducer, toolsReducer, tagsReducer, userReducer
});