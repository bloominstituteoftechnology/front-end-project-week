import { combineReducers } from 'redux';
import { notesReducer } from './notesReducer';
import { loadingReducer } from './loadingReducer';
import { searchReducer } from './searchReducer';

export default combineReducers({
  notes: notesReducer,
  loading: loadingReducer,
  searchTerm: searchReducer
});
