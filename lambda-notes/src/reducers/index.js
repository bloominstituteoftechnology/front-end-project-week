import { combineReducers } from 'redux';
import notesReducer from './Notes';

const rootReducer = combineReducers({
    notes: notesReducer
});

export default rootReducer;