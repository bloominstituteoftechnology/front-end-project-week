import { combineReducers } from 'redux';
import { notesReducer } from './notesReducer';
import { userReducer } from './userReducer';

export default combineReducers({
  notesReducer,
  userReducer,
})