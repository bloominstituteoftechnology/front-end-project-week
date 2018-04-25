import { EDIT_NOTE, CREATE_NOTE, DELETE_NOTE } from '../actions';

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (note = {}, action) => {
  switch (action.type) {
    case EDIT_NOTE:
      return note = action.payload;
    case CREATE_NOTE:
      return note = action.payload;
    case DELETE_NOTE:
      return note = action.payload;
    default:
      return note;
  }
};
