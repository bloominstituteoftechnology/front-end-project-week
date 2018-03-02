import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from '../actions';
import initialState  from './NoteData';

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            title: action.payload.title,
            body: action.payload.body,
            id: (action.payload.id = state.countID),
          },
        ],
        countID: ++state.countID,
      };
      case DELETE_NOTE:
    return {
      ...state,
      notes: state.notes.filter(each => {
        return each.id !== action.payload;
      }),
    };
  case EDIT_NOTE:
    let newNotes = state.notes.map(note => {
      if (note.id === action.id) {
        if (action.payload.title === '') action.payload.title = note.title;
        if (action.payload.body === '') action.payload.body = note.body;
        return {
          title: action.payload.title,
          body: action.payload.body,
          id: action.id,
        };
      }
      return note;
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
