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
      let newNotes = state.notes.map(each => {
        if (each.id === action.id) {
          if (action.payload.title === '') action.payload.title = each.title;
          if (action.payload.content === '')
            action.payload.content = each.content;
          return {
            title: action.payload.title,
            content: action.payload.content,
            id: action.id,
          };
        }
        return each;
      });

      return {
        ...state,
        notes: newNotes,
      };
    default:
      return state;
  }
};

export default reducer;
