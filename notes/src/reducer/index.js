// Data
import notes from '../data/notes';

// Action types
import { ADD_NOTE } from '../actions'; 

const initialState = {
  notes: notes,
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...notes, action.payload]
      };
    default:
      return state;
  }
}

export default reducer;