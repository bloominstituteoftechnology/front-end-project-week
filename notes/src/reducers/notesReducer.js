import { FETCHING_NOTES, FETCHING_NOTES_SUCCESS, FETCHING_NOTES_FAILURE,
        POSTING_NOTE, POSTING_NOTE_SUCCESS, POSTING_NOTE_FAILURE
    } from '../actions';

const initialState = {
    notes: [],
    fetchingNotes: false,
    postingNote: false,
    error: null
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NOTES:
        return {...state,
                fetchingNotes: true};
    case FETCHING_NOTES_SUCCESS:
        return {...state, 
                notes: action.payload,
                fetchingNotes: false};
    case FETCHING_NOTES_FAILURE:
        return {...state, 
            error: action.payload,
            fetchingNotes: false};
    
    
    case POSTING_NOTE:
        return{...state, postingNote: true};
    case POSTING_NOTE_SUCCESS:
        return{...state, postingNote: false};
    case POSTING_NOTE_FAILURE:
        return{...state, postingNote: false, error: action.payload};
    default:
      return state;
  }
};