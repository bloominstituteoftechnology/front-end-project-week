import { LOAD_NOTES } from '../actions/LoadAction';
import { DELETE_NOTE } from '../actions/DeleteAction';
import noteData from '../noteData';
const initialState = {
  notes: [...noteData]
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_NOTES:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            id: action.payload.id,
            title: action.payload.title,
            text: action.payload.text
          }
        ]
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => {
          return note.id !== action.payload;
        })
      };
    default:
      return state;
  }
};

export default rootReducer;
