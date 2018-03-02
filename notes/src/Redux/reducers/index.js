import { GET_NOTES, ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from '../actions';

const initialState = {
  notes: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            title: action.payload.title,
            content: action.payload.content,
            id: action.payload.id,
          },
        ],
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(each => {
          return each.id !== action.payload.id;
        }),
      };
    case EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map(each => {
          if(each.id !== action.payload.id) return each;
          return action.payload;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
