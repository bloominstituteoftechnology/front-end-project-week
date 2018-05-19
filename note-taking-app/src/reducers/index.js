import { combineReducers } from 'redux';
import { notesReducer } from './notesReducer';
import { toolsReducer } from './toolsReducer';

export default combineReducers({
  notesReducer, toolsReducer
});