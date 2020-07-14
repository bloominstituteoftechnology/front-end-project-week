import { combineReducers } from "redux";
import loadReducer from './loadReducer';
import noteReducer from './noteReducer';

export default combineReducers({
    noteReducer,
    loadReducer    
});