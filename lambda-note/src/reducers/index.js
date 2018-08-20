import { VIEW_NOTE, ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from '../actions';

const initialState = {
  notes: [],
  isView: false,
  isAdded: false,
  isEditted: false,
  isDeleted: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case VIEW_NOTE:
      return { ...state, notes: action.payload, isView: true };
    case ADD_NOTE:
      return { ...state, notes: [ ...state.notes, action.payload], isView: false, isAdded: true };
    case EDIT_NOTE:
      return { 
        ...state,
        notes: [ ...state.notes.filter(note => note.id !== action.payload.id), action.payload],
        isView: false,
        isAdded: false,
        isEditted: true,
        isDeleted: false
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: [ ...state.notes.filter(note => note.id !== action.payload.id) ],
        isView: false,
        isAdded: false,
        isEditted: false,
        isDeleted: true
      }
    default:
      return state;
  }
}