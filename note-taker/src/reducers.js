
import { combineReducers } from 'redux';
import homeReducer from './app/home/duck';
import createNewReducer from './app/create-new/duck';
const rootReducer = combineReducers({
    home: homeReducer,
    createNew: createNewReducer
});

export default rootReducer;

