import { combineReducers } from 'redux';
import { friendsReducer } from './friendsReducer';
import { singleFriendReducer } from './singleFriendReducer';

export default combineReducers({
  friendsReducer,
  singleFriendReducer
});