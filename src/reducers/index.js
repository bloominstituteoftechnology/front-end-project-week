import { combineReducers } from 'redux';
import AuthReducer from './auth';
import NotesReducer from './notes';

const rootReducer = combineReducers({
  auth: AuthReducer,
  notes: NotesReducer,
});

export default rootReducer;