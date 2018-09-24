import {combineReducers} from 'redux';
import {notesReducer} from './notesReducer';
import {noteReducer} from './noteReducer';

const rootReducer = combineReducers({
    notesReducer,
    noteReducer,
});

export default rootReducer;