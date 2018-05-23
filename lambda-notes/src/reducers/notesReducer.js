import { FETCH_NOTES } from "../actionTypes/actionTypes";

export default (state={}, action) => {
  switch(action.type) {
    case FETCH_NOTES:
      return action.payload;
    default:
      return state;
  }
}