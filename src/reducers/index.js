import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NotesReducer from './NotesReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  notes: NotesReducer,
});

export default rootReducer;
