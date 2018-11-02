import {
  FETCH_NOTES, 
  FETCH_NOTES_SUCCESS, 
  ERROR
} from '../actions';

const initialState = {
  fetching: false,
  notes: [],
  error: null
}

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES:
      return { ...state, fetching: true };
    case FETCH_NOTES_SUCCESS:
    console.log('FETCH SUCCESS', action.payload)
      return {
        ...state,
        notes: [...state.notes, ...action.payload],
        fetching: false
      };
    case ERROR:
      return { ...state, fetching: false, error: action.payload }
  }
}