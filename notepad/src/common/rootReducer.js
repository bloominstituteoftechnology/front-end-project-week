import { combineReducers } from 'redux';

import notesListReducer from '../Reducers/notesListReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
  notes: notesListReducer,
  isLoading: loadingReducer,
});
