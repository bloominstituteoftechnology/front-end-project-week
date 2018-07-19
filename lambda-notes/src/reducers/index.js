import { combineReducers } from 'redux';
import noteReducer from './NoteReducer';
import { reducer as modal } from 'redux-modal'

export default combineReducers({
    noteReducer,
    modal
}) 