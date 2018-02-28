import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from '../actions';
import dummyData from '../dummydata';

const initialState = {
  notes: [...dummyData],
  deleteActive: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, {
          id: action.id,
          title: action.title,
          body: action.body,
        }
        ],
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((val) => {
          if (val.id.toString() === action.id) {
            return {
              id: Number(action.id),
              title: action.title,
              body: action.body,
            };
          } return val;
        }),
      };
    case DELETE_NOTE:
      break;
    default:
      return state;
  }
};
