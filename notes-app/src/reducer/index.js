import { combineReducers } from 'redux';
import { axiosReducer, otherReducer } from './reducer';

export default combineReducers({
    axiosReducer,
    otherReducer
})