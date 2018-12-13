import { FETCHING_NOTES, FETCHING_NOTES_SUCCESS, FETCHING_NOTES_FAILURE, ADDING_NOTE, ADD_NOTE_SUCCESS, ADD_NOTE_FAILURE, DELETING_NOTE, DELETE_NOTE_SUCCESS, DELETE_NOTE_FAILURE, EDITING_NOTE, EDIT_NOTE_SUCCESS, EDIT_NOTE_FAILURE, SORTING_A_Z } from '../actions';

const initialState = {
  notes: [],
  fetching: false,
  error: null,
  adding: false,
  deleting: false,
  single: false,
  updating: false
};
const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NOTES:
      return { ...state, fetching: true };
    case FETCHING_NOTES_SUCCESS:
      return {
        ...state,        
        notes: [...state.notes, ...action.payload],
        fetching: false
      };
    case FETCHING_NOTES_FAILURE:
      return { ...state, fetching: false, error: action.payload };
    case ADDING_NOTE:
      return {...state, adding: true};
    case ADD_NOTE_SUCCESS:
      return { ...state, adding: false };
    case ADD_NOTE_FAILURE:
      return { 
        ...state, 
        adding: false, 
        error: action.payload 
      }  
    case DELETING_NOTE:
      return {...state, deleting: true};
    case DELETE_NOTE_SUCCESS:
      return { ...state, deleting: false };
    case DELETE_NOTE_FAILURE:
      return { 
        ...state, 
        deleting: false, 
        error: action.payload 
      }
      case EDITING_NOTE:
        return {...state, editing: true};
      case EDIT_NOTE_SUCCESS:
        return {
          ...state,
          editing: false,
          notes: state.notes.map(
            note => (note.id === action.payload.id ? action.payload : note)
          )
        };
      case EDIT_NOTE_FAILURE:
        return { 
          ...state, 
          editing: false, 
          error: action.payload 
        } 
      case SORTING_A_Z:
        return {...state, notes: state.notes.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))}          
      default:
        return state; 
  }
};

export default notesReducer;