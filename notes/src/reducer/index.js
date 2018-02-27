// Data
import notes from '../data/notes';

// Action types
import { ADD_NOTE } from '../actions'; 

const initialState = {
  notes: [],
  id: 1,
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      const newNote = {
        ...action.payload,
        id: state.id,
      }
      return {
        ...state,
        notes: [...state.notes, newNote],
        id: state.id + 1,
      };
    default:
      return state;
  }
}

export default reducer;