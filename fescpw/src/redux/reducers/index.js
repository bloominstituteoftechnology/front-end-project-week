import { combineReducers } from 'redux';
import { notesReducer } from './notesReducer';
import { searchReducer } from './searchReducer';

const rootReducer = combineReducers({
    notesReducer,
    searchReducer
});

export default rootReducer;