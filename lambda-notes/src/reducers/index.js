import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE, TOGGLE_DELETE } from '../actions'
import dummyData from '../dummyData';

const initialState = {
  notes: [...dummyData]
}

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, {
          id: action.id,
          title: action.title,
          text: action.text,
        }
        ],
      };
    case UPDATE_NOTE:
    return {
      ...state,
      notes: state.notes.map(note => {
        console.log('THIS IS note.id', note.id)
        console.log('typeof(note.id)', typeof(note.id))
        // iterates over ALL notes and returns untouched note UNLESS the 
        // if conditional below is met.  You need to do this otherwise
        // ALL notes will be changed.
        // FIXED this in actions: note.id is a number, while action.id is a string.
        if (note.id === action.id) {
          return {
            id: action.id,
            title: action.title,
            text: action.text,
          };
        } return note;
      }),
    };
    case TOGGLE_DELETE:
      return {
        ...state,
        deleteActive: !state.deleteActive,
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: [...state.notes, {
          id: action.id,
          title: action.title,
          text: action.text,
        }
        ],
      };
    default:
      return state; 
  }
}

export default noteReducer;