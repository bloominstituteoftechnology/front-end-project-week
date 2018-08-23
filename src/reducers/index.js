import { combineReducers } from 'redux';
import notes from './notes';
import auth from './auth';

const rootReducer = combineReducers({
    notes,
    auth
});

export default rootReducer;