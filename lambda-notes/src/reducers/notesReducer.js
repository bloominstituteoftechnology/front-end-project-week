import { CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE } from '../actions';

export default (notes: [], action) => {
  switch (action.type) {
    case CREATE_NOTE:
      return [ ...notes, action.payload ];
    case UPDATE_NOTE:
      return todos;
    case DELETE_NOTE:
      return todos;
    default:
      return notes;
  }
};
