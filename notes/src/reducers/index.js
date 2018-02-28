import { combineReducers } from 'redux';
import { notes, modal, user } from './notes-reducer';

export const rootReducer = combineReducers({
 	notes,
 	modal,
 	user
})