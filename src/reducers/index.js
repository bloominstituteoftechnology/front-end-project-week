import { combineReducers } from 'redux';
import notes from './notes';
import auth from './auth';
import { loadingBarReducer } from 'react-redux-loading-bar'

const rootReducer = combineReducers({
    notes,
    auth,
    loadingBar: loadingBarReducer,
});

export default rootReducer;