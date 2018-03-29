import { LOAD_NOTES } from '../actions';
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
    default:
      return state;
  }
};

export default rootReducer;
