import { FETCH_USER, FETCHING_USER } from "../actionTypes/actionTypes";

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_USER:
      return action.payload;
    default:
      return state;
  }
}