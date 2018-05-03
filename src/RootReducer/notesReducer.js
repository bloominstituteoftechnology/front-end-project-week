import {
  CREATE_NOTE,
  UPDATE_SELECTED,
  DELETE_NOTE,
  EDIT_NOTE,
  GET_NOTES
} from '../actions';

export const notesReducer = (notes = [], action) => {
  switch (action.type) {
    case CREATE_NOTE:
      return [...notes, action.payload];
    case GET_NOTES:
      return action.payload;
    case UPDATE_SELECTED:
      return notes.map(note => {
        if (note._id === action.payload)
          return { ...note, selected: !note.selected };
        else return note;
      });
    case EDIT_NOTE:
      return notes.map(note => {
        if (note._id === action.payload._id) {
          note.title = action.payload.title;
          note.text = action.payload.text;
        }
        return note;
      });
    case DELETE_NOTE:
      return notes.filter(note => {
        if (note._id !== action.payload) return note;
        else return false;
      });
    default:
      return notes;
  }
};

export default notesReducer;
