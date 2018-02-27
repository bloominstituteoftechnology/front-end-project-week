
import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE, TOGGLE_MODAL } from '../actions';
import initialNotes from '../dummy-data';

export const notes = (state = initialNotes, action) => {
  switch (action.type) {
  
    case ADD_NOTE:
      return [ ...state, action.payload ];

      case DELETE_NOTE:
      return state.filter((note) => {
      	return note.id !== action.payload;
      });

      case EDIT_NOTE:
	      return state.map((note)=>{
        if(note.id === action.payload.id){
          return action.payload;
        }
        return note;
      });

    default:
      return state;
  }
};

const initialModal = {showing: false, deleteId: null}

export const modal = (state = initialModal, action) => {
  switch(action.type){
    case TOGGLE_MODAL:
      return { ...state, showing: !state.showing, deleteId: action.payload }

    case DELETE_NOTE:
      return { ...state, showing: !state.showing, deleteId: null}

    default:
      return state;
  } 
}