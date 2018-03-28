import { ADD_NOTE, UPDATE_NOTE } from '../actions'
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
        if (note.id.toString() === action.id) {
          return {
            id: Number(action.id),
            title: action.title,
            text: action.text,
          };
        } return note;
      }),
    };
    default:
      return state; 
  }
}

export default noteReducer;