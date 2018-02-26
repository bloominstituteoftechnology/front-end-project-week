import { combineReducers } from 'redux';
import { notesReducer } from './notes-reducer';

export const rootReducer = combineReducers({
 	notes: notesReducer
})