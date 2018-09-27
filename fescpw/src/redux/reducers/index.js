import { combineReducers } from 'redux';
import { ntsReducer } from './ntsReducer';
import { srhReducer } from './srhReducer';

const rootReducer = combineReducers({
    ntsReducer,
    srhReducer
});

export default rootReducer;