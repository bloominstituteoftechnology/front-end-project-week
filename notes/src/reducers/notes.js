import {
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE
} from '../actions/notes';

const notes = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          content: action.content 
        }
      ];
    case DELETE_NOTE:
      return state.filter((note) => note.id !== action.id);
    // case EDIT_NOTE:
    //   return stuff;
    default:
      return state;
    }
};

export default notes;