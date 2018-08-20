import { VIEW_LIST, VIEW_NOTE, ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from '../actions';
import { dummyNote } from '../dummy';

const initialState = {
  notes: [...dummyNote],
  isView: false,
  isAdded: false,
  isEditted: false,
  isDeleted: false
};

export default (state = initialState, action) => {
  console.log('state: ', state.notes)
  switch (action.type) {
    case VIEW_LIST:
      return {
        ...state, 
        isView: false,
        isAdded: false,
        isEditted: false,
        isDeleted: false
      }
    case VIEW_NOTE:
      return { 
        ...state, 
        isView: true,
        isAdded: false,
        isEditted: false,
        isDeleted: false
      };
    case ADD_NOTE:
      return { 
        ...state, 
        notes: [ ...state.notes, action.payload], 
        isView: false, 
        isAdded: true,
        isEditted: false,
        isDeleted: false
      };
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
        notes: [ ...state.notes.filter(note => note.id !== action.payload) ],
        isView: false,
        isAdded: false,
        isEditted: false,
        isDeleted: true
      }
    default:
      return state;
  }
}