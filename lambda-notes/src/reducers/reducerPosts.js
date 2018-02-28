import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload) //examine state, if key, remove it.
    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = { ...state  };
      // newState[post.id] = post;
      // return newState;
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
    console.log(_.mapKeys(...state, action.payload.data, 'id'));
      return _.mapKeys(...state, action.payload.data, 'id');
    default:
      return state;
  }
}