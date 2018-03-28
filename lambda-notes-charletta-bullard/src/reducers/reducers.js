import { ADD_NOTE, VIEW_NOTE, EDIT_NOTE, DELETE_NOTE } from './action/actions';
import notes from '../dummyData';

const initialState = {
  notes: [...notes],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: state.notes.concat(action.payload),
      };

    case VIEW_NOTE:
      return {
        ...state, current: action.payload
      };

    case EDIT_NOTE:
      return {
        ...state.map(note => {
          if (note.id === action.payload.id) {
            return action.payload;
          }
          return note;
        }),
      };

    case DELETE_NOTE:
      return {
        ...state.filter(note => {
          return note.id !== action.payload;
        }),
      };

    default:
      return state;
  }
};
