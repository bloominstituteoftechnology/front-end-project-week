
import { ADD_NOTE, DELETE_NOTE } from '../actions';

const initialState = {
  notes: [{title: 'test note title', content: 'test for initial note content', id: 0}]
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };

      case DELETE_NOTE:
      const deletedNotes = state.notes.filter((note) => {
      	return note.id !== action.payload;
      });
      return { ...state, notes: deletedNotes };

    default:
      return state;
  }
};