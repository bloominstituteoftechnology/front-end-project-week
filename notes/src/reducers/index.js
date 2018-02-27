import { combineReducers } from 'redux';
import { notes, modal } from './notes-reducer';

export const rootReducer = combineReducers({
 	notes,
 	modal
})