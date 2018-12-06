// import actions types
import {
  ADD_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE,
} from '../actions';

// initial state
const initialState = [];

// reducers
export default (state = initialState, action ) => {
  switch (action.type){
    case ADD_NOTE:
      return [
        ...state,
        action.payload,
      ];
    case UPDATE_NOTE:
      return state.map(
        note => {
          return note.id === action.payload.id ?
            action.payload :
            note
        }

      )
    case DELETE_NOTE:
      return state.filter(
        note => note.id !== action.payload.id
      )
    default:
      return state;
  }
}