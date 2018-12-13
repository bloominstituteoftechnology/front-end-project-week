import { combineReducers } from 'redux';
import { authReducer as auth } from './authReducer';
import { notesReducer as notes } from './notesReducer';

export default combineReducers({
  auth,
  notes
});
