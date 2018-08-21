import { VIEW_LIST, VIEW_NOTE, ADD_NOTE, EDIT_NOTE, DELETE_NOTE, VIEW_ADDNOTE, VIEW_DELETENOTE, VIEW_EDITNOTE } from '../actions';
import { dummyNote } from '../dummy';

const initialState = {
  notes: [...dummyNote],
  selectedNoteId: null,
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
        selectedNoteId: action.payload,
        isView: true,
        isAdded: false,
        isEditted: false,
        isDeleted: false
      };
    case VIEW_ADDNOTE:
      return {
        ...state,
        isView: false, 
        isAdded: true,
        isEditted: false,
        isDeleted: false
      };
    case VIEW_EDITNOTE:
      return {
        ...state,
        isView: false, 
        isAdded: false,
        isEditted: true,
        isDeleted: false
      }
    case VIEW_DELETENOTE:
      return {
        ...state,
        isView: false, 
        isAdded: false,
        isEditted: false,
        isDeleted: true
      }
    case ADD_NOTE:
      return { 
        ...state, 
        notes: [ ...state.notes, action.payload], 
      };
    case EDIT_NOTE:
      return { 
        ...state,
        notes: [ ...state.notes.filter(note => note.id !== action.payload.id), action.payload ]
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: [ ...state.notes.filter(note => note.id !== action.payload) ]
      }
    default:
      return state;
  }
}