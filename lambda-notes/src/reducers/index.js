import { combineReducers } from 'redux';
import PostsReducer from './reducerPosts';


const rootReducer = combineReducers({
  posts: PostsReducer
});

export default rootReducer;