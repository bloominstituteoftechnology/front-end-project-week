import { FETCH_USER } from "../actionTypes/actionTypes";

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_USER:
      return action.payload;
    default:
      return state;
  }
}