import { combineReducers } from 'redux';
import { notesReducer } from './notesReducer';
import { loadingReducer } from './loadingReducer';

export default combineReducers({
  notes: notesReducer,
  loading: loadingReducer
});
