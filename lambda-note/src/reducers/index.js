import { FETCH_NOTE, ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from '../actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTE:
      return [ ...state, ...action.payload ];
    case ADD_NOTE:
      return [ ...state, action.payload ];
    case EDIT_NOTE:
      return [ ...state.filter(note => note.id !== action.payload.id), action.payload];
    case DELETE_NOTE:
      return state.filter(note => note.id !== action.payload.id);
    default:
      return state;
  }
}