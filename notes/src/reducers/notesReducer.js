import { FETCHING_NOTES, FETCHING_NOTES_SUCCESS, FETCHING_NOTES_FAILURE } from '../actions';

const initialState = {
    notes: [],
    fetchingNotes: false,
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
    default:
      return state;
  }
};