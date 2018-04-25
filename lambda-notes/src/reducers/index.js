import { combineReducers } from 'redux';
import { reducer as modal } from 'redux-modal';
import noteReducer from './NoteReducer';

export default combineReducers({
    modal,
    noteReducer
})