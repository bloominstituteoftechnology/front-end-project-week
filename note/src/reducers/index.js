import { combineReducers } from 'redux';
import { notes, modal, misc } from './notes-reducer';

export const rootReducer = combineReducers({
 	notes,
 	modal,
 	misc
})