import { combineReducers } from 'redux';
import NoteReducer from './notes';
import UserReducer from './users';

const rootReducer = combineReducers({
   notes: NoteReducer,
   users: UserReducer
});

export default rootReducer;