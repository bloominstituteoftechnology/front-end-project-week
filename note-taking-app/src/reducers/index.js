import { combineReducers } from 'redux';
import { notesReducer } from './notesReducer';
import { toolbarReducer } from './toolbarReducer';

export default combineReducers({
  notesReducer,
  toolbarReducer
});