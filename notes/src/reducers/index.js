import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NotesReducer from './NotesReducer';

export default combineReducers({
  auth: AuthReducer,
  notes: NotesReducer
})
