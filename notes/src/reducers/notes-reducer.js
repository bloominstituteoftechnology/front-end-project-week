
import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from '../actions';

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

      case EDIT_NOTE:
	      let editedNotes = state.notes.map((note)=>{
        if(note.id === action.payload.id){
          return action.payload;
        }
        return note;
      });
      return {...state, notes: editedNotes}

    default:
      return state;
  }
};