import { noteReducers } from './NoteReducers';
import { toggleReducers } from './ToggleReducers';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    notes: noteReducers,
    toggle: toggleReducers
})
