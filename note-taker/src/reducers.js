
import { combineReducers } from 'redux';
import homeReducer from './app/home/duck';

const rootReducer = combineReducers({
    home: homeReducer
});

export default rootReducer;

