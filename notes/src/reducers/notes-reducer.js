
import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from '../actions';

const initialState = {
  notes: [
    {
      title: 'Larem Ipsum?', 
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", 
      id: 0
    },
    {
      title: 'Why do we use it?', 
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", 
      id: 1
    },
    {
      title: 'Get some Ipsum', 
      content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour, or randomised words which don't look even slightly believable.", 
      id: 2
    },
    {
      title: 'Larem Ipsum?', 
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", 
      id: 3
    },
    {
      title: 'Why do we use it?', 
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", 
      id: 4
    },
    {
      title: 'Get some Ipsum', 
      content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour, or randomised words which don't look even slightly believable.", 
      id: 5
    }
  ]
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