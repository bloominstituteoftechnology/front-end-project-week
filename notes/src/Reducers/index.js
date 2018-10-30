import {
  GETTING, GETTING_SUCCESS, GETTING_ERROR,
  GET_BY_ID, GET_BY_ID_SUCCESS, GET_BY_ID_ERROR,
  POSTING, POSTING_SUCCESS, POSTING_ERROR,
  DELETE, DELETE_SUCCESS, DELETE_ERROR
} from '../actions';

const initialState = {
  notes: [],
  fetchingNotes: false,
  gettingNote: false,
  addingNote: false,
  updatingNote: false,
  deletingNote: false,
  error: null
}


const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING:
      return { ...state, fetchingNotes: true };
    case GETTING_SUCCESS:
      return {
        ...state,
        fetchingNotes: false,
        notes: [...state.notes, ...action.payload]
      };
    case GETTING_ERROR:
      return {
        ...state,
        fetchingNotes: false,
        error: action.payload
      }
    case POSTING:
      return {...state, addingNote: true };
    case POSTING_SUCCESS:
      return {
        ...state,
        notes: action.payload,
        addingNote: false
      }
    case POSTING_ERROR:
      return {
        ...state,
        addingNote: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default notesReducer;