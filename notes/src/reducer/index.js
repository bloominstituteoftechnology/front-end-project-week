// Data
import notes from '../data/notes';

// Action types
import { ADD_NOTE, UPDATE_NOTE } from '../actions';

const initialState = {
  notes: [],
  id: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      const newNote = {
        ...action.payload,
        id: state.id,
      };
      return {
        ...state,
        notes: [...state.notes, newNote],
        id: state.id + 1,
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map(note => {
          if (note.id !== action.payload.id) return note;
          return action.payload;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
