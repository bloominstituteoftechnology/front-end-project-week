// import actions types
import * as actions from '../actions';

// initial state
const initialState = {
  notes: [],
  note: null,
  fetchingNotes: false,
  fetchingNote: false,
  addingNote: false,
  updatingNote: false,
  deletingNote: false,
  error: null,
};

// reducers
export default (state = initialState, action ) => {
  switch (action.type){
    case actions.NOTES_REQUEST:
      return {
        ...state,
        fetchingNotes: true,
      }
    case actions.NOTE_REQUEST:
      return {
        ...state,
        fetchingNote: true,
      }
    case actions.POST_REQUEST:
      return {
        ...state,
        addingNote: true,
      }
      case actions.PUT_REQUEST:
      return {
        ...state,
        updatingNote: true,
      }
    case actions.DELETE_REQUEST:
      return {
        ...state,
        deletingNote: true,
      }
    case actions.NOTES_SUCCESS:
      return {
        ...state,
        notes: action.payload,
        fetchingNotes: false,
        error: null,
      }
    case actions.NOTE_SUCCESS:
      return {
        ...state,
        note: action.payload.note,
        fetchingNote: false,
        error: null,
      }
    case actions.PUT_SUCCESS:
      return {
        ...state,
        notes: state.notes.map( note => (
          note._id === action.payload.note._id ?
          action.payload.note :
          note
        )),
        updatingNote: false,
        error: null,
      }
      case actions.POST_SUCCESS:
        return {
          ...state,
          notes: [ ...(state.notes), action.payload],
          addingNote: false,
          error: null,
        }
      case actions.DELETE_SUCCESS:
        return {
          ...state,
          notes: state.notes.filter( note => note["_id"] !== action.payload["_id"]),
          deletingNote: false,
          error: null,
        }
    case actions.REQUEST_ERROR:
      return {
        ...state,
        fetchingNotes: false,
        fetchingNote: false,
        addingNote: false,
        updatingNote: false,
        deletingNote: false,
        error: action.payload
      }

    default:
      return state;
  }
}