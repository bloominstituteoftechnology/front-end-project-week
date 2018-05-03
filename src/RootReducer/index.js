import { combineReducers } from 'redux';
import AuthReducer from './auth';
import notesReducer from './notesReducer';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  notes: notesReducer
});

export default rootReducer;
