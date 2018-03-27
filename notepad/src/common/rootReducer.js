import { combineReducers } from 'redux';

import notesListReducer from '../Notes/notesListReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
  notes: notesListReducer,
  isLoading: loadingReducer,
});
