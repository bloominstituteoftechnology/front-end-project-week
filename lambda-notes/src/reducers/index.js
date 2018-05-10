import { FETCH_NOTES, FETCHED_NOTES, ERROR_FETCHING, CREATE_NOTE, ERROR_CREATING, FETCH_NOTE, DELETE_NOTE, ERROR_DELETING, UPDATING, ERROR_UPDATING, UPDATED } from '../actions';

 const initialState = {
  notes: [],
  note: {},
  fetchingNotes: false,
  creatingNote: false,
  fetchNote: false,
  updatingNote: false,
  noteUpdated: false,
  deletingNote: false,
  error: null
 }


export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_NOTES:
      return Object.assign({}, state, { fetchingNotes: true });

    case FETCHED_NOTES:
      return Object.assign({}, state, {
        notes: [...action.payload],
        fetchingNotes: false,
        error: null
      });

    case ERROR_FETCHING:
      return Object.assign({}, state, {
        error: action.payload,
      });

    case CREATE_NOTE:
      return Object.assign({}, state, {
        notes: [...action.payload],
        creatingNote: true,
        error: null
    });

    case ERROR_CREATING:
      return Object.assign({}, state, {
        error: action.payload,
    });

    case FETCH_NOTE:
      return Object.assign({}, state, {
        note: action.payload , 
        fetchNote: true 
    });

    case DELETE_NOTE:
      return Object.assign({}, state, {
        note: [...state],
        deletingNote: true
    });

    case ERROR_DELETING:
      return Object.assign({}, state, {
        error: action.payload,
    });

    case UPDATING:
      return Object.assign({}, state, {
        note: [...state],
        updatingNote: true
    });

    case UPDATED:
      return Object.assign({}, state, {
        noteUpdated: true,
        note: [...state],
      })

    case ERROR_UPDATING:
      return Object.assign({}, state, {
        error: action.payload,
    });
    
    default:
      return state;
    }
};

export default rootReducer;