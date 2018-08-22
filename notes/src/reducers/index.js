import { FETCHING_POSTS, POSTS_FETCHED, ERROR,
          FETCHING_POST, POST_FETCHED, DELETING_POST,
            CANCEL_DELETE, CONFIRM_DELETE } from '../actions';

const initialState = {
  posts: [],
  selectedPost: null,
  isFetchingPost: false,
  isFetchingPosts: false,
  showingModal: false,
  error: null
}

export const postsReducer = (state=initialState, action) => {
  switch(action.type){
    case FETCHING_POSTS:
      return {
        ...state,
        isFetchingPosts: true
      }
    case POSTS_FETCHED:
      return {
        ...state,
        isFetchingPosts: false,
        posts: action.payload
      }
    case FETCHING_POST:
      return {
        ...state,
        selectedPost: null,
        isFetchingPost: true
      }
    case POST_FETCHED:
      return {
        ...state,
        selectedPost: action.payload,
        isFetchingPost: false
      }
    case CONFIRM_DELETE:
      return {
        ...state,
        showingModal: true
      }
    case CANCEL_DELETE:
      return {
        ...state,
        showingModal: false
      }
    case DELETING_POST:
      return {
        ...state,
        showingModal: false,
        selectedPost: null
      }
    case ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}
