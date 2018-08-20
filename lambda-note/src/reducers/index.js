import { FETCH_NOTE, ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from '../actions';

const initialState = {
  notes: [],
  isFetched: false,
  isAdded: false,
  isEditted: false,
  isDeleted: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTE:
      return { ...state, notes: action.payload };
    case ADD_NOTE:
      return { ...state, notes: [ ...state.notes, action.payload] };
    case EDIT_NOTE:
      return { 
        ...state,
        notes: [ ...state.notes.filter(note => note.id !== action.payload.id), action.payload]
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: [ ...state.notes.filter(note => note.id !== action.payload.id) ]
      }
    default:
      return state;
  }
}