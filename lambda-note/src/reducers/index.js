import { FETCHING_NOTE, VIEW_NOTE, ADD_NOTE, EDIT_NOTE, DELETE_NOTE, VIEW_ADDNOTE, VIEW_DELETENOTE, VIEW_EDITNOTE, SEARCH_NOTE, NO_SEARCH } from '../actions';

const initialState = {
  notes: [],
  filteredNotes: [],
  selectedNote: {},
  isFetched: false,
  isView: false,
  isSearched: false,
  isAdded: false,
  isEditted: false,
  isDeleted: false,
  error: null,
  alert: ''
};

export default (state = initialState, action) => {
  console.log('state: ', state.notes)
  switch (action.type) {
    case FETCHING_NOTE:
      return {
        ...state, 
        notes: action.payload,
        alert: '',
        isFetched: true,
        isView: false,
        isSearched: false,
        isAdded: false,
        isEditted: false,
        isDeleted: false
      };
    case VIEW_NOTE:
      return { 
        ...state,
        selectedNote: action.payload,
        isFetched: false,
        isView: true,
        isSearched: false,
        isAdded: false,
        isEditted: false,
        isDeleted: false
      };
    case VIEW_ADDNOTE:
      return {
        ...state,
        isFetched: false,
        isView: false, 
        isAdded: true,
        isSearched: false,
        isEditted: false,
        isDeleted: false
      };
    case VIEW_EDITNOTE:
      return {
        ...state,
        isFetched: false,
        isView: false, 
        isAdded: false,
        isSearched: false,
        isEditted: true,
        isDeleted: false
      }
    case VIEW_DELETENOTE:
      return {
        ...state,
        isFetched: false,
        isView: false, 
        isAdded: false,
        isSearched: false,
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
        notes: [ ...state.notes.map(note => {
          if (note._id === action.payload._id) {
            return action.payload 
          }
          return note;
        })]
      };
    case DELETE_NOTE:
      return {
        ...state,
        alert: action.payload.success,
        isFetched: false,
        isView: false, 
        isSearched: false,
        isAdded: false,
        isEditted: false,
        isDeleted: true
      };
    case SEARCH_NOTE:
      return {
        ...state,
        isSearched: true,
        filteredNotes: [ ...state.notes.filter(note => {
          if (note.textBody.search(action.payload) !== -1 || note.title.search(action.payload) !== -1) {
            return note;
          }
        })]
      }
    case NO_SEARCH:
      return {
        ...state,
        isSearched: false
      }
    default:
      return state;
  }
}